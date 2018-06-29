module.exports = (dato, root, i18n) => {


  // layout: post.html
  // title: 5 ingenious ways to use web push notifications
  // author: Joanna Worotyńska
  // image: cover.jpeg
  // date: 2018-02-28
  // draft: false
  // locale: en

  // inside a "src/articles" directory...
  i18n.availableLocales.forEach(lang => {
    i18n.withLocale(lang, () => {
      const path = `src/${lang}`;
      root.directory(path, (rootDirectory) => {
        /**
         * Create index files
         */
        dato.mainPages.forEach(index => {
          let workingDirectory;
          if (index.path !== 'main')
            workingDirectory = index.path;

          const filePath = workingDirectory ? `${workingDirectory}/index.md` : `index.md`;
          rootDirectory.createPost(
            filePath, "yaml", {
              frontmatter: {
                layout: index.layout,
                locale: lang,
                title: index.value && index.value.title,
                description: index.value && index.value.description,
              }
            }
          );
        });

        /**
         * Get posts from DATOCMS
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
            `${post.slug}/index.md`, "yaml", {
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