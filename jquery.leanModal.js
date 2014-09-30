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
                    center: true,
                    closeButton: null,
                    attr: 'href',
                    prefix: 'lean',
                    transitionTime: 300,
                    classSwitchOnly: false,
                    cssOverlayHidden: {
                        'display'           : 'block',
                        'position'          : 'fixed',
                        'background-color'  : '#000000',
                        'opacity'           : 0,
                        'z-index'           : 0
                    },
                    cssOverlayVisible: {
                        'opacity'           : 0.5,
                        'z-index'           : 11000
                    },
                    cssModalHidden: {
                        'display'           : 'block',
                        'position'          : 'absolute',
                        'background-color'  : '#ffffff',
                        'top'               : '100px',
                        'opacity'           : 0,
                        'z-index'           : 0
                    },
                    cssModalVisible: {
                        'opacity'           : 1,
                        'z-index'           : 11001
                    },
                    eventType: 'click',
                    onBeforeClose: null,
                    onAfterClose: null,
                    onBeforeShow: null,
                    onAfterShow: null
                }, options);

                // add the overlay if required
                if (!$('#' + this.options.prefix + '_wrap').length) {
                    $("body").append('<div id="' + this.options.prefix + '_wrap" class="lean_wrap"><div id="' + this.options.prefix + '_overlay" class="lean_overlay"></div><div id="' + this.options.prefix + '_modal" class="lean_modal"></div></div>');
                    if (!this.options.classSwitchOnly) {
                        $('#' + this.options.prefix + '_overlay').css(this.options.cssOverlayHidden).hide();
                        $('#' + this.options.prefix + '_modal').css(this.options.cssModalHidden).hide();
                    }
                }

                // Bind the modal to show to a click
                this.each(function() {
                    $(this).on(_this.options.eventType, function(e) {
                        $elem = $($(this).attr(_this.options.attr));
                        _this.show_modal($elem);
                        e.preventDefault();
                    });
                });

            };

            this.show_modal = function($selector) {

                // vars
                var _this = this,
                    $lean_modal = $('#' + this.options.prefix + '_modal');

                // call back
                var b_func = this.options.onBeforeShow;
                if (typeof b_func == 'function') b_func(_this, $selector);

                // Inject the Content
                $('#' + this.options.prefix + '_modal').html($selector.html());

                // should we center?
                if (!this.options.classSwitchOnly) {
                    if (this.options.center) {

                        var modal_height = $lean_modal.outerHeight(),
                            modal_width = $lean_modal.outerWidth();

                        this.options.cssModalHidden = $.extend(this.options.cssModalHidden, {
                            'left'          : '50%',
                            'margin-left'   : -(modal_width/2) + "px"
                        });

                    }
                }

                // body
                $('body').addClass('lean-modal-active');

                // overlay
                $('#' + this.options.prefix + '_overlay')
                    .addClass('lean-overlay-visible')
                    .on('click', function() { _this.close_modal($selector); });

                // actual modal
                $('#' + this.options.prefix + '_modal')
                    .addClass('lean-modal-visible');

                if (!this.options.classSwitchOnly) {

                    // overlay
                    $('#' + this.options.prefix + '_overlay')
                        .css(this.options.cssOverlayHidden)
                        .show()
                        .animate(this.options.cssOverlayVisible, this.options.transitionTime);

                    // actual modal
                    $('#' + this.options.prefix + '_modal')
                        .css(this.options.cssModalHidden)
                        .show()
                        .animate(this.options.cssModalVisible, this.options.transitionTime);

                }

                // call back
                var a_func = this.options.onAfterShow;
                if (typeof a_func == 'function') a_func(this, $selector);

                // close button
                $(options.closeButton).on('click', function() { _this.close_modal(); });

            };

            this.close_modal = function() {

                // call back
                var b_func = this.options.onBeforeClose;
                if (typeof b_func == 'function') b_func(this);

                // vars
                var _this = this;

                // body
                $('body').removeClass('lean-modal-active');

                // close overlay
                $('#' + this.options.prefix + '_overlay').removeClass('lean-overlay-visible');

                // close modal
                $('#' + this.options.prefix + '_modal').removeClass('lean-modal-visible');

                if (!this.options.classSwitchOnly) {

                    // overlay
                    $('#' + this.options.prefix + '_overlay')
                        .css(this.options.cssOverlayVisible)
                        .animate(this.options.cssOverlayHidden, this.options.transitionTime, function() { $('#' + _this.options.prefix + '_overlay').hide(); });

                    // actual modal
                    $('#' + this.options.prefix + '_modal')
                        .css(this.options.cssModalVisible)
                        .animate(this.options.cssModalHidden, this.options.transitionTime, function() { $('#' + _this.options.prefix + '_modal').hide(); });

                }

                // call back
                var a_func = this.options.onAfterClose;
                if (typeof a_func == 'function') a_func(this);

            };

            // Init
            // ----

            this.init(options);

            // keep it chainable
            return this;

        }
    });

})(jQuery);