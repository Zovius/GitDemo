describe('Protractor baby steps',function(){ // TestSuite
	
	function suma(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}
	
	it('basic program 1', function(){ //1er Tescase
		
		browser.get("https://angularjs.org");
		browser.get("https://juliemr.github.io/protractor-demo/")
	//	element(by.model("operator")).element(by.css("option:nth-child(5)")).click();
		
		
		suma(2,3);
		suma(4,2);
		suma(1,8);
		element
		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3)")).getText().then(function(texto){
				console.log(texto);	
				

			
			
			})	
		})
	})
})