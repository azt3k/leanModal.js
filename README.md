A super simple JQuery plugin for modal windows. works with your CSS.

Built for all the short dialogs, alerts, panels and such associated with an app,
that you may want to handle in a modal window. Designed to handle hidden
content, and doesn’t apply any styles to the target element, other than for
displaying and positioning.

–

Usage exactly like the old one except you can invoke it like this

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

$('<a data-modal="#video-iframe"></a>') .leanModal({ top : '50%', overlay : 0.4, closeButton: ".close", attr: 'data-modal' })
                                        .trigger('click'); 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



and has more options

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
{  
              top:'100px',  
          overlay: 0.5,  
      closeButton: null,  
             attr: 'href',  
        eventType: 'click',  
    onBeforeClose: null,  
     onAfterClose: null,  
     onBeforeShow: null,  
      onAfterShow: null
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
