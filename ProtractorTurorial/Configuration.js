exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec1.js'],

capabilities: {
	'browserName':'chrome'
},

onPrepare:function(){
	browser.driver.manager().windows().maximize();
	      jasmine.getEnv().addReporter(
	        new Jasmine2HtmlReporter({
	          savePath: 'target/screenshots'
	        })
	      );
	   },
jasmineNodeOpts:{
	showColors:true,
}
};
