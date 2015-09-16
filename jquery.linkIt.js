/*
* name = linkIt 
* version 0.1.0
*/

(function($){
    $.fn.linkIt = function(options) {
        // default setting
        var settings = $.extend({
            href : null ,
            text : null ,
            target : '_self'
        },options);
        
        // Validation
        if(settings.href == null) {
            console.log('you need href option to work');
            return this;
        }
        
        return this.each(function(){
            var object = $(this);
            if(settings.text == null){
                settings.text = object.text;
            }
            
            object.wrap('<a href = "'+settings.href+'" target ="'+settings.target+'" ></a>').text(settings.text);
        });
    }
}(jQuery));
