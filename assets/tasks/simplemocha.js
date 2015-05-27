module.exports = function(grunt, options){
  return {
    all: {
      src: 'test/server/**/*.js',
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'tap'
      }
    }
  }
};