module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@navigation": "./src/navigation",
            "@layout": "./src/shared/layout",
            "@components": "./src/components",
            "@modules": "./src/modules",
            "@context": "./src/shared/context",
            "@rejex": "./src/shared/rejex",
            "@lib": "./src/shared/lib",
            "@helpers": "./src/shared/helpers",
            "@utils": "./src/shared/utils",
            "@hooks": "./src/shared/hooks",
            "@assets": "./src/shared/assets",
            "@styles": "./src/shared/assets/styles",
            "@ui": "./src/shared/ui",
            "@data": "./src/data",
          },
        },
      ],
    ],
  }
}
