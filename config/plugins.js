module.exports = () => {
  return {
    ckeditor: true,
    seo: {
      enabled: true,
    },
    "content-versioning": {
      enabled: true,
    },
    transformer: {
      enabled: true,
      config: {
        prefix: "/api/",
        responseTransforms: {
          removeAttributesKey: true,
          removeDataKey: true,
        },
      },
    },
  };
};
