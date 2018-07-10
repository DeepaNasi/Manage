     
        exports.config ={
	
        seleniumAddress:'http://localhost:4444/wd/hub',
        
        // Capabilities to be passed to the webdriver instance 
        
          capabilities: {
              
             browserName : 'chrome'
        }, 
        
            
        //Framework to use jasmine is recommended
        
        framework : 'jasmine',
        
        //Spec patterns are relative to the current working directory when protractor is called
        
        specs:['Go to Library.js'],
         
         //options to be passed to jasmine
         
         jasmineNodeOpts: {
            defaultTimeoutInterval: 400000
        
         },
          


                 };
        
        
