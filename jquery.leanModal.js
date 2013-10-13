(function($){
 
    $.fn.extend({ 
         
        leanModal: function(options) {        

            // methods
            // -------

            this.init = function(options) {

                var _this = this;                

                this.options = $.extend({
                    top: '100px',
                    overlay: 0.5,
                    closeButton: null,
                    attr: 'href'
                }, options);
                
                $('#lean_overlay').remove();
                $("body").append("<div id='lean_overlay'></div>"); 

                this.each(function() {
                    $(this).click(function(e) {
                        _this.show_modal($($(this).attr(_this.options.attr)));
                        e.preventDefault();
                    });
                });

            };            

            this.show_modal = function($selector) {

                // vars
                var _this = this,
                    modal_height = $selector.outerHeight(),
                    modal_width = $selector.outerWidth();
                
                // close button
                $(options.closeButton).click(function() { _this.close_modal($selector); });

                // overlay
                $('#lean_overlay')  .css({ display: 'block', opacity: 0 })
                                    .fadeTo(200,this.options.overlay)
                                    .click(function() { 
                                         _this.close_modal($selector);                    
                                    });                                    
                // actual modal
                $selector   .css({ 
                                'display'       : 'block',
                                'position'      : 'fixed',
                                'opacity'       : 0,
                                'z-index'       : 11000,
                                'left'          : '50%',
                                'margin-left'   : -(modal_width/2) + "px",
                                'top'           :  typeof this.options.top === 'number' ? this.options.top + 'px' : this.options.top
                            })
                            .fadeTo(200,1);

            };

            this.close_modal = function($selector) {
                $("#lean_overlay").fadeOut(200);
                $selector.css({ 'display' : 'none' });
            };

            // Init
            // ----

            this.init(options);            

            // keep it chainable
            return this;           
    
        }
    });
     
})(jQuery);