module.exports = function(grunt, options){
    return {
		options: {
            mangle: {
                except: ['jQuery']
            }
        },
        widget: {
            files: {
                'public/assets/app/js/widget/scripts.min.js' : [
                	'assets/src/vendor/pickadate/lib/picker.js',
                	'assets/src/vendor/pickadate/lib/picker.date.js',
                	'assets/src/vendor/pickadate/lib/picker.time.js',
                	'assets/src/vendor/pickadate/lib/legacy.js',
                	'assets/src/vendor/pickadate/lib/translations/pt_BR.js',
                    'assets/src/vendor/typeahead.js/dist/typeahead.bundle.min.js',
                    
                    'assets/src/js/widget/app/_config.js',
                    'assets/src/js/widget/vendor/_plugins.js',
                    'assets/src/js/widget/modules/_validation.js',
                    'assets/src/js/widget/modules/_fromToPickadate.js',
                    'assets/src/js/widget/modules/_util.js',
                    'assets/src/js/widget/scripts.js'
                ]
            }
        }
    };
};
