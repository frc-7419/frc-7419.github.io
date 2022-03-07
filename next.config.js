module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/twitter",
        destination: "https://twitter.com/7419Tech",
        permanent: true,
        basePath: false,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/7419tech/",
        permanent: true,
        basePath: false,
      },
      {
        source: "/reddit",
        destination: "https://old.reddit.com/user/7419Tech/",
        permanent: true,
        basePath: false,
      },
      {
        source: "/facebook",
        destination:
          "https://www.facebook.com/7419-Tech-Support-FRC-1907516719310109/",
        permanent: true,
        basePath: false,
      },
    ];
  },
};
