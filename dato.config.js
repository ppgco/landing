module.exports = (dato, root, i18n) => {
  let menuItems = [];
  let popup = {};

  i18n.availableLocales.forEach(lang => {
    i18n.withLocale(lang, () => {
      /**
       * Menu Generation
       * @type {Array}
       */
      popup[lang] = dato.configuration.popup;

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
        if (item.footerMenuId)
          menuItems.push({
            slug: item.slug,
            title: item.title,
            icon: item.icon,
            link:  item.link || `pages/${item.slug}`,
            menuId: item.footerMenuId,
            locale: lang
          });
      }

      const path = `src/${lang}`;

      root.directory(path, (rootDirectory) => {

        /**
         * Create employee
         */
        dato.employees.forEach((employee, index) => {
          rootDirectory.createPost(
            `employees/${employee.slug}/index.md`, "yaml", {
              frontmatter: {
                layout: 'default.html',
                unlisted: true,
                locale: lang,
                index: index,
                cover: getImagePath(employee.coverimage),
                hover: getImagePath(employee.hoverimage),
                name: employee.fullName,
                email: employee.email,
                role: employee.role
              },
              content: employee.content || ''
            }
          );
        });


        /**
         * Create pages
         */
        dato.pages.forEach(page => {
          const extendTranslations = page.layout && page.layout.translations || {};

          rootDirectory.createPost(
            `pages/${page.slug}/index.md`, "yaml", {
              frontmatter: {
                layout: page.layout.name,
                locale: lang,
                title: page.value && page.value.title || page.title,
                slug: page.slug,
                icon: page.icon,
                description: page.value && page.value.description,
                ...extendTranslations,
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
          const extendTranslations = mainPage.layout && mainPage.layout.translations || {};

          const pagePath = mainPage.path || 'nospecifiedmainpagepath.md'
          rootDirectory.createPost(
            pagePath, "yaml", {
              frontmatter: {
                layout: mainPage.layout.name,
                locale: lang,
                collection: mainPage.guides,
                title: mainPage.value && mainPage.value.title,
                description: mainPage.value && mainPage.value.description,
                ...extendTranslations
              }
            }
          );

          if (mainPage.collection) {
            const nestedPath = mainPage.path.replace('index.md', '');
            const collectionLayout = mainPage.collectionLayout && mainPage.collectionLayout.name || 'post.html';
            const extendTranslations = mainPage.collectionLayout && mainPage.collectionLayout.translations || {};
            dato[mainPage.collection].forEach((item, index) => {
              rootDirectory.createPost(
                `${nestedPath}/${item.slug}/index.md`, "yaml", {
                  frontmatter: {
                    layout: collectionLayout,
                    locale: lang,
                    slug: item.slug,
                    title: item.title || item.title,
                    subtitle: item.subtitle,
                    sneakPeak: item.sneakPeak,
                    category: item.category && item.category.name,
                    video: item.video,
                    date: item.endDate,
                    index: index + 1,
                    location: item.location,
                    author: item.author && item.author.fullName,
                    image: getImagePath(item.backgroundImage),
                    description: item.sneakPeak,
                    tags: item.tags && item.tags.map(tag => tag.name).join(', '),
                    ...extendTranslations
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
      ...dato.configuration.entity.payload.attributes,
      availableLocales: i18n.availableLocales.map(locale => ({name: locale})),
      popup: popup,
      menu: menuItems
    }
  );
};

function getImagePath(image) {
  if (image) {
    return image.imgixHost + image.upload.path
  }
}