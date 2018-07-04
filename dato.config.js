module.exports = (dato, root, i18n) => {
  let menuItems = [];

  i18n.availableLocales.forEach(lang => {
    i18n.withLocale(lang, () => {
      /**
       * Menu Generation
       * @type {Array}
       */

      for (let id in dato.itemsById) {
        const item = dato.itemsById[id];
        if (item.menuId)
          menuItems.push({
            slug: item.slug,
            title: item.title,
            icon: item.icon,
            link:  item.link || `pages/${item.slug}`,
            menuId: item.menuId,
            locale: lang
          });
      }

      const path = `src/${lang}`;

      root.directory(path, (rootDirectory) => {

        /**
         * Create pages
         */
        dato.pages.forEach(page => {
          rootDirectory.createPost(
            `pages/${page.slug}/index.md`, "yaml", {
              frontmatter: {
                layout: page.layout.name,
                locale: lang,
                title: page.value && page.value.title || page.title,
                menu: page.menuId,
                slug: page.slug,
                icon: page.icon,
                description: page.value && page.value.description,
                ...page.json || {}
              },
              content: page.content || ''
            }
          );
        });

        /**
         * Create content
         */
        dato.mainPages.forEach(mainPage => {
          const pagePath = mainPage.path || 'nospecifiedmainpagepath.md'
          rootDirectory.createPost(
            pagePath, "yaml", {
              frontmatter: {
                layout: mainPage.layout.name,
                locale: lang,
                collection: mainPage.guides,
                title: mainPage.value && mainPage.value.title,
                description: mainPage.value && mainPage.value.description,
              }
            }
          );

          if (mainPage.collection) {
            const nestedPath = mainPage.path.replace('index.md', '');
            const collectionLayout = mainPage.collectionLayout && mainPage.collectionLayout.name || 'post.html';
            dato[mainPage.collection].forEach((item, index) => {
              rootDirectory.createPost(
                `${nestedPath}/${item.slug}/index.md`, "yaml", {
                  frontmatter: {
                    layout: collectionLayout,
                    locale: lang,
                    slug: item.slug,
                    title: item.title,
                    category: item.category && item.category.name,
                    index: index + 1,
                    author: item.author && item.author.fullName,
                    image: getImagePath(item.backgroundImage),
                    description: item.sneakPeak,
                    tags: item.tags && item.tags.map(tag => tag.name).join(', ')
                  },
                  content: item.content
                }
              );
            });
          }
        });
      });
    });
  });


  menuItems = menuItems.reduce((menu, item) => {
    if (!menu[item.menuId]) {
      menu[item.menuId] = [];
    }
    menu[item.menuId].push(item);
    return menu;
  }, {})

  /**
   * Settings generation (metadata)
   */
  root.createDataFile(
    `src/settings.json`, 'json',
    {
      ...dato.configuration.entity.payload.attribute,
      menu: menuItems
    }
  );
};

function getImagePath(image) {
  if (image) {
    return image.imgixHost + image.upload.path
  }
}