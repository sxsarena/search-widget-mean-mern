module.exports = function(grunt, options){
    return {
		// mongodb: {
	 //        command: 'mongod --config ../mongodb.conf',
	 //        options: {
	 //            async: false,
	 //            execOptions: {
	 //                cwd: './mongodb/bin/'
	 //            }
	 //        }
	 //    },
	 //    mongo: {
	 //      command: 'mongod',
  //           options: {
  //               async: true,
  //               execOptions: {
	 //                cwd: './mongodb/bin/'
	 //            }
  //           }
	 //    },
	    mysql: {
	    	command: 'sudo apt-get install mysql-server && ',
	    	async: false
	    }

    };
};
