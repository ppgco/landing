module.exports = (dato, root, i18n) => {


  // layout: post.html
  // title: 5 ingenious ways to use web push notifications
  // author: Joanna Worotyńska
  // image: cover.jpeg
  // date: 2018-02-28
  // draft: false
  // locale: en

  // createLangs:

  /**
   {
      "data": {
          "type": "item",
          "attributes": {
              "key": "test2",
              "value": {
                  "en": "test2",
                  "pl": "test23"
              }
          },
          "relationships": {
              "item_type": {
                  "data": {
                      "type": "item_type",
                      "id": "36953"
                  }
              }
          }
      }
   }
   */
  i18n.availableLocales.forEach(lang => {
    i18n.withLocale(lang, () => {
      const path = `src/${lang}`;
      root.directory(path, (rootDirectory) => {
        /**
         * Create index files
         */
        dato.mainPages.forEach(index => {
          rootDirectory.createPost(
            index.path, "yaml", {
              frontmatter: {
                layout: index.layout.name,
                locale: lang,
                title: index.value && index.value.title,
                description: index.value && index.value.description,
              }
            }
          );
        });

        /**
         * Create pages
         */
        dato.pages.forEach(page => {
          console.log(page.layout.name)
          rootDirectory.createPost(
            `pages/${page.slug}/index.md`, "yaml", {
              frontmatter: {
                layout: page.layout.name,
                locale: lang,
                title: page.value && page.value.title,
                description: page.value && page.value.description,
              },
              content: page.content || ''
            }
          );
        });

        /**
         * Create blog posts
         */
        dato.posts.forEach((post) => {

          /**
           * Omit if empty - no translation for this article
           */
          if (!post.title)
            return;

          /**
           * Create post
           */
          rootDirectory.createPost(
            `blog/${post.slug}/index.md`, "yaml", {
              frontmatter: {
                // console.log({seo: post.seoMetaTags, author: post.author, tags: post.tags});
                // post.seoMetaTags.forEach(seo => {
                //   console.log(seo)
                // })
                layout: 'post.html',
                title: post.title,
                author: post.author.fullName
              },
              content: post.content
            }
          );
        });
      });
    });
  });
};