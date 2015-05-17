module.exports = function(grunt, options){
    return {
		src: [options.projectDir+'{,*/,**/, **/*}']
    };
};