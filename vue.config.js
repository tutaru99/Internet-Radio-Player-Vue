module.exports = {
  transpileDependencies: ["vuetify", "vuex-persist"],
  publicPath:
    process.env.NODE_ENV === "production" ? "/Internet-Radio-Player-Vue" : "/",
};
