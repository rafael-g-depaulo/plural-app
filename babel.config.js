module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./server"],
        alias: {},
      },
    ],
  ],
}