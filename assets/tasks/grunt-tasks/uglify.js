module.exports = function(grunt, options){
    return {
		options: {
            mangle: {
                except: ['jQuery']
            }
        },
        widget: {
            files: {
                '../../public/assets/app/js/widget/scripts.min.js' : [
                    '../src/js/widget/scripts.js'
                ]
            }
        }
    };
};
