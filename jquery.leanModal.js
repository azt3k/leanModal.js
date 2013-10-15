(function($){
 
    $.fn.extend({ 
         
        leanModal: function(options) {        

            // methods
            // -------

            this.init = function(options) {

                // bind this to a local var with a diff name
                var _this = this;                

                // configure
                this.options = $.extend({
                    top: '100px',
                    overlay: 0.5,
                    closeButton: null,
                    attr: 'href',
                    eventType: 'click',
                    onBeforeClose: null,
                    onAfterClose: null,
                    onBeforeShow: null,
                    onAfterShow: null                    
                }, options);
                
                // remove the overlay if present and add a new one
                $('#lean_overlay').remove();
                $("body").append("<div id='lean_overlay'></div>"); 

                // Bind the modal to show to a click
                this.each(function() {
                    $(this).on(_this.options.eventType, function(e) {
                        _this.show_modal($($(this).attr(_this.options.attr)));
                        e.preventDefault();
                    });
                });

            };            

            this.show_modal = function($selector) {

                // call back
                var b_func = this.options.onBeforeShow;
                if (typeof b_func == 'function') b_func();

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

                // call back
                var a_func = this.options.onAfterShow;
                if (typeof a_func == 'function') a_func();                            

            };

            this.close_modal = function($selector) {

                // call back
                var b_func = this.options.onBeforeClose;
                if (typeof b_func == 'function') b_func();

                // close it
                $("#lean_overlay").fadeOut(200);
                $selector.css({ 'display' : 'none' });

                // call back
                var a_func = this.options.onAfterClose;
                if (typeof a_func == 'function') a_func();

            };

            // Init
            // ----

            this.init(options);            

            // keep it chainable
            return this;           
    
        }
    });
     
})(jQuery);