module.exports = function(grunt, options){
    return {
		widget: {
			options: {
				sourceMap: false,
				outputStyle: 'compressed'
			},
			files: [{
				'public/assets/app/css/widget/style.css' : 'assets/src/scss/widget/style.scss'
	      	}]
        }
    };
};
