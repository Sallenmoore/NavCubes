$(document).ready(function() {

    var collapsibleEl = $('.collapsible'); //collapsible element
    var buttonEl = $(".collapsible button"); //button inside element
    $(".nav-cube-right").css({'right': 0}); // wrapper element for right side menus
    var visibleWidth = buttonEl.outerWidth() + ($('.collapsible').outerWidth() - $('.collapsible').width());
    var hiddenWidth = $('.nav-cube-menus').outerWidth() - visibleWidth;//width that will be hidden
    collapsibleEl.css({'margin-left': hiddenWidth}); //on page load we'll move and hide part of elements

    var stacked = $(".stacked");
    var num_elements = stacked.length;
    if (num_elements > 1) {
        stacked.each(function() {
            var marginWidth = $('.nav-cube-menus').outerWidth() - (visibleWidth * num_elements);
            $(this).css({'margin-left': marginWidth});
            num_elements--;
        });
    }

    $(buttonEl).click(function()
    {
        var width = (($(this).parent().outerWidth() * 2) / 3);
        var margin = $(this).parent().css('margin-left').replace(/[^-\d\.]/g, '');
        var slide;
        if ($(this).parent().hasClass('navcube-toggle'))
        {
            slide = parseInt(margin) + width;
            $(this).parent().removeClass('navcube-toggle');
            $(this).parent().animate({marginLeft: slide});
        } else {
            slide = parseInt(margin) - width;
            $(this).parent().addClass('navcube-toggle');
            $(this).parent().animate({marginLeft: slide});
        }
    });
});