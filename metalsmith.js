'use strict';

const Metalsmith = require("metalsmith");
const wordcount = require("metalsmith-word-count");
const uglify = require('metalsmith-uglify');
const sitemap = require('metalsmith-sitemap');
const less = require('metalsmith-less');
const unlisted = require('metalsmith-unlisted');
const concat = require('metalsmith-concat');
const ignore = require('metalsmith-ignore');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const collections = require('metalsmith-collections');
const paginate = require('metalsmith-pagination');
const assets = require('metalsmith-assets');
const env = require('metalsmith-env');
const tags = require('metalsmith-tags');
const i18n = require('metalsmith-i18n');
const cleanCSS = require('metalsmith-clean-css');
const moment = require('moment');
const t18n = require("i18n");

const lodash = require('lodash');
const crypto = require('crypto');
const htmlMinifier = require('metalsmith-html-minifier');

const Handlebars = require('handlebars');

const urlProd = 'pushpushgo.com';
const urlStag = 'stppg.co';

const i18nConfig = {
  updateFiles: true,
  syncFiles: true,
  default: 'en',
  locales: ['en', 'pl'],
  directory: 'locales'
}

t18n.configure(i18nConfig);

Handlebars.registerHelper("__", function () {
  return t18n.__.apply(this, arguments);
});

Handlebars.registerHelper("link", function (value, opts) {
  return (value || '').replace('index.html', '');
});

Handlebars.registerHelper("toDir", function (value, opts) {
  return (value || '').replace(/index.*.html/, '');
});

Handlebars.registerHelper("envlink", function (value, env) {
  return (value || '').replace('HOST_DOMAIN', (env === 'production') ? urlProd : urlStag);
});

Handlebars.registerHelper("md5", function (value, opts) {
  return crypto.createHash('md5').update(value).digest("hex");
});

Handlebars.registerHelper("stripPath", function (path) {
  const pathArr = path.split('/').slice(0,-1)
  return pathArr.join('/')
});

Handlebars.registerHelper('ifCond', function (v1, v2, options) {
  if (v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

Handlebars.registerHelper("linkLocale", function (value, locale, opts) {
  return '/' + locale + '/' + (value || '').replace('index.html', '');
});

Handlebars.registerHelper("part", function (value) {
  value = (value instanceof Buffer) ? value.toString('utf8') : value;
  value = value.replace(/<(?:.|\n)*?>/gm, '');
  var length = value.length;
  var toCut = (length <= 350) ? length : 350;
  if (value.substr(0, 1) === "(") console.log(value);
  return value.substr(0, toCut) + '...';
});

Handlebars.registerHelper("image", function (value) {
  return `/` + (value.path || '').replace('index.html', value.image);
});

Handlebars.registerHelper('eachLocale', function (list, locale, opts) {
  var i, result = '';
  list = list || [];
  for (i = 0; i < list.length; ++i)
    if (list[i].path.split('/')[0] === locale)
      result = result + opts.fn(list[i]);
  return result;
});

Handlebars.registerHelper('recentPosts', function (collection, opts) {
  var i, result = '';
  collection = collection.filter(i => i.pin) || [];

  for (i = 0; i < collection.length; ++i) {
    result = result + opts.fn(collection[i]);
  }
  return result;
});

Handlebars.registerHelper('parseDate', function (date) {
  return moment(date).format('L');
});

const config = {
  clean: true,
  source: './src',
  destination: './release',
  i18n: i18nConfig,
  sitemap: {
    privateProperty: 'unlisted',
    hostname: "https://pushpushgo.com/"
  },
  cssmin: {
    files: 'styles/*.css',
    cleanCSS: {
      rebase: true
    }
  },
  meta: {
    title: "PushPushGo",
    keywords: 'webpush, push, notifications, email, marketing, solution, saas, powiadomienia web push, notyfikacje, aplikacja, narzędzie, powiadomienia na stronie, offbrowser, desktop, mobile, message, wiadomości dla użytkowników, pushpushgo',
    description: "Send web push notifications, today!",
    url: "https://pushpushgo.com/"
  },
  assets: {
    "source": "./assets",
    "destination": "."
  },
  layouts: {
    engine: 'handlebars',
    partials: 'layouts/partials',
  },
  uglify: {
    filter: ['js/**/*.js'],
    removeOriginal: true,
    sourceMap: false,
    concat: 'js/all.js'
  },
  concat: {
    files: [
      'zepto/dist/zepto.min.js',
      'js/all.js'
    ],
    searchPaths: ['node_modules'],
    output: 'js/main.js',
  },
  less: {
    pattern: '**/main.less',
    render: {
      paths: [
        'assets/styles/',
      ],
    },
  },
  ignore: [
    'assets/js/*',
    '**/*.less'
  ],
  collections: {
    posts: {
      pattern: '**/pl/blog/*.md',
      sortBy: 'date',
      reverse: true
    },
    enPosts: {
      pattern: '**/en/blog/*.md',
      sortBy: 'date',
      reverse: true
    },
    pages: {
      pattern: '**/pages/*.md',
      sortBy: 'date',
      reverse: true
    }
  },
  paginate: {
    en: {
      'collections.enPosts': {
        perPage: 6,
        layout: '../layouts/blog.html',
        first: false,
        path: 'en/blog/page/:num/index.html',
        pageMetadata: {
          title: 'Blog',
          locale: 'en'
        },
        filter: function (page) {
          return !page.draft;
        }
      }
    },
    pl: {
      'collections.posts': {
        perPage: 6,
        layout: '../layouts/blog.html',
        first: false,
        path: 'pl/blog/page/:num/index.html',
        pageMetadata: {
          title: 'Blog',
          locale: 'pl'
        },
        filter: function (page) {
          return !page.draft;
        }
      }
    }
  },
  wordcount: {
    speed: 200
  },
  tags: {
    handle: "tags",
    path: "tag/:tag/index.html",
    layout: "tag.html"
  }
}

const defaultVariables = function (files, metalsmith, done) {
  lodash.map(files, function (file) {
    file.locale = (!file.locale) ? config.i18n.default : file.locale;
    // allLocales.push(file.locale);
    file.tagsPPG = (file.tags) ? lodash.map(file.tags, 'name').join(';') : '';
  })
  done();
}

const filepaths = function (files) {
  Object.keys(files).forEach(path => {
    if (!files[path].path) {
      files[path].path = path
    }
  })
};

const app = Metalsmith(__dirname)
  .metadata(config.meta)
  .source(config.source)
  .destination(config.destination)
  .use(i18n(config.i18n))
  .clean(config.clean)
  .use(env())
  .use(assets(config.assets))
  .use(uglify(config.uglify))
  .use(concat(config.concat))
  .use(less(config.less))
  .use(tags(config.tags))
  .use(collections(config.collections))
  .use(unlisted())
  .use(paginate(config.paginate.pl))
  .use(paginate(config.paginate.en))
  .use(markdown())
  .use(filepaths)
  .use(wordcount(config.wordcount))
  .use(defaultVariables)
  .use(layouts(config.layouts))
  .use(sitemap(config.sitemap))
  .use(ignore(config.ignore))
  .use(cleanCSS(config.cssmin))
  .use(htmlMinifier())

if (module.parent) {
  module.exports = app
} else {
  app.build(function (err) { if (err) console.log(err.stack) })
}
