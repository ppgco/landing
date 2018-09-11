'use strict';

const Metalsmith = require("metalsmith");
const wordcount = require("metalsmith-word-count");
const uglify = require('metalsmith-uglify');
const sitemap = require('metalsmith-sitemap');
const less = require('metalsmith-less');
const concat = require('metalsmith-concat');
const ignore = require('metalsmith-ignore');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const collections = require('metalsmith-collections');
const paginate = require('metalsmith-pagination');
const assets = require('metalsmith-assets');
const env = require('metalsmith-env');
const tags = require('metalsmith-tags');
const cleanCSS = require('metalsmith-clean-css');
const moment = require('moment');
const lodash = require('lodash');
const crypto = require('crypto');
const htmlMinifier = require('metalsmith-html-minifier');
const Handlebars = require('handlebars');
const metadata = require('metalsmith-metadata');
const tag = require('html-tag');

const urlProd = 'pushpushgo.com';
const urlStag = 'stppg.co';

// TODO: REMOVE
Handlebars.registerHelper("__", function(key) {
  return key;
});

Handlebars.registerHelper("link", function(value, locale, opts) {
  if (!value)
    return;

  if (value.indexOf('http') !== -1)
    return value;

  if (locale && typeof locale !== 'object')
    return '/' + locale + '/' + (value || '').replace('index.md', '').replace('index.html', '');

  return (value || '').replace('index.md', '').replace('index.html', '');
});


Handlebars.registerHelper("envlink", function(value, env) {
  return (value || '').replace('HOST_DOMAIN', (env === 'production') ? urlProd : urlStag);
});

Handlebars.registerHelper("md5", function(value, opts) {
  return crypto.createHash('md5').update(value).digest("hex");
});

Handlebars.registerHelper("stripPath", function(path) {
  const pathArr = path.split('/').slice(0, -1)
  return pathArr.join('/')
});

Handlebars.registerHelper('prop', function(object, prop) {
  return object[prop];
});

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if (v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

Handlebars.registerHelper('each', function(list, locale, limit, opts) {
  list = list || [];

  if (typeof locale === 'object') {
    opts = locale;
  }

  if (typeof limit === 'object') {
    opts = limit;
  }

  if (typeof locale === 'string') {
    list = list.filter(item => item.locale === locale);
  }

  if (typeof limit === 'number') {
    list = list.slice(0, limit);
  }

  return list.reduce((concated, item) => {
    concated += opts.fn(item);
    return concated;
  }, '');

});

Handlebars.registerHelper('parseDate', function(date) {
  return moment(date).format('L');
});

Handlebars.registerHelper('tagGenerator', function({tagName, attributes, content}) {
  return tag(tagName, attributes, content);
});

const {mainLangs} = require('./src/settings.json');

const config = {
  clean: false,
  source: './src/',
  destination: './release',
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
      pattern: '**/blog/**/*.md',
      sortBy: 'index',
      reverse: true
    },
    guides: {
      pattern: '**/{user-guide,poradnik}/**/*.md',
      sortBy: 'index',
      reverse: false
    },
    employees: {
      pattern: '**/employees/**/*.md',
      sortBy: 'index',
      reverse: true
    },
    webinars: {
      pattern: '**/webinar/**/*.md',
      sortBy: 'index',
      reverse: true
    },
    jobs: {
      pattern: '**/{jobs,praca}/**/*.md',
      sortBy: 'index',
      reverse: true
    },
    faq: {
      pattern: '**/faq/**/*.md',
      sortBy: 'index',
      reverse: false
    },
    pages: {
      pattern: '**/pages/**/*.md',
      sortBy: 'index',
      reverse: true
    }
  },
  paginate: {
    en: {
      'collections.posts': {
        perPage: 6,
        layout: '../layouts/blog.html',
        first: false,
        path: 'en/blog/page/:num/index.html',
        pageMetadata: {
          ...mainLangs.en,
          locale: 'en'
        },
        filter: (page) => page.locale === 'en' && ['en/pages/blog/index.md', 'en/blog/index.md'].indexOf(page.path) === -1,
        sortBy: 'index'
      }
    },
    pl: {
      'collections.posts': {
        perPage: 6,
        layout: '../layouts/blog.html',
        first: false,
        path: 'pl/blog/page/:num/index.html',
        pageMetadata: {
          ...mainLangs.pl,
          locale: 'pl'
        },
        filter: (page) => page.locale === 'pl' && ['pl/pages/blog/index.md', 'pl/blog/index.md'].indexOf(page.path) === -1,
        sortBy: 'index'
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

const defaultVariables = function(files, metalsmith, done) {
  lodash.map(files, function(file) {
    file.locale = (!file.locale) ? 'en' : file.locale;
  })
  done();
}

const filepaths = function(files) {
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
  .clean(config.clean)
  .use(env())
  .use(metadata({
      settings: 'settings.json',
    }))
  .use(assets(config.assets))
  .use(uglify(config.uglify))
  .use(concat(config.concat))
  .use(less(config.less))
  .use(tags(config.tags))
  .use((files, metalsmith, done) => {
    metalsmith._metadata.collections = null
    metalsmith._metadata.posts = null
    metalsmith._metadata.guides = null
    metalsmith._metadata.employees = null
    metalsmith._metadata.webinars = null
    metalsmith._metadata.faq = null
    metalsmith._metadata.pages = null
    metalsmith._metadata.jobs = null
    done();
  })
  .use(collections(config.collections))
  .use(paginate(config.paginate.pl))
  .use(paginate(config.paginate.en))
  .use(markdown())
  .use(filepaths)
  .use(wordcount(config.wordcount))
  .use(defaultVariables)
  .use(layouts(config.layouts))
  .use(cleanCSS(config.cssmin))

if (module.parent) {
  module.exports = app
} else {
  app
    .use(sitemap(config.sitemap))
    .use(htmlMinifier())
    .use(ignore(config.ignore))
    .build(function(err) {
      if (err) console.log(err.stack)
    })
}
