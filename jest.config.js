module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Adding this line solved the issue
    "^.+\\.vue$": "vue-jest", //用于转译vue
    "^.+\\.tsx?$": "ts-jest", //转译ts
  },
};
