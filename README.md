A super simple JQuery plugin for modal windows. works with your CSS.

Built for all the short dialogs, alerts, panels and such associated with an app,
that you may want to handle in a modal window. Designed to handle hidden
content, and doesn’t apply any styles to the target element, other than for
displaying and positioning.

Example Usage
-------------


````javascript
$('body').append(
    '<div class="modal" id="video-iframe" style="display:none;">' +
        '<iframe id="ytplayer" ' +
            'type="text/html" ' +
            'src="' + url + '" ' +
            'frameborder="0" ' +
            'allowfullscreen> ' +
        '</iframe>' +
    '</div>'
);

$('<a data-modal="#video-iframe"></a>') .leanModal({attr: 'data-modal' })
                                        .trigger('click');
````



Options
-------


````json
{
    center: true,
    closeButton: null,
    attr: 'href',
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
        'display'           : 'block',
        'position'          : 'fixed',
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
        'display'           : 'block',
        'position'          : 'absolute',
        'opacity'           : 1,
        'z-index'           : 11001
    },
    eventType: 'click',
    onBeforeClose: null,
    onAfterClose: null,
    onBeforeShow: null,
    onAfterShow: null
}
````

