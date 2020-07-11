module.exports = {
  siteName: "Cy",
  siteDescription: "Web site for a fast moving revision house",
  siteUrl: "https://gridsome-starter-bootstrap.loke.dev",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "BlogPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "employees/**/*.md",
        typeName: "Employees",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
    {
      use: "gridsome-plugin-flexsearch",
      options: {
        searchFields: ["title"],
        collections: [
          {
            typeName: "BlogPost",
            fields: ["id", "path", "title", "excerpt", "image"],
          },
        ],
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-72659574-10",
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000,
      },
    },
  ],
  css: {
    loaderOptions: {
      scss: {},
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
  },
};
