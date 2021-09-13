$.fn.draggable = function() {
    $(this).mousedown(function(e) {
        var drag = $(this);
        var posParentTop = drag.parent().offset().top;
        var posParentBottom = posParentTop + drag.parent().height();
        var posOld = drag.offset().top;
        var posOldCorrection = e.pageY - posOld;
        drag.addClass('dragActive');
        var mouseMove = function(e) {
            if (e.which == 1) {
                var posNew = e.pageY - posOldCorrection;
                if (posNew < posParentTop) {
                    if (drag.prev().length > 0) {
                        drag.insertBefore(drag.prev().css({ 'top': -drag.height() }).animate({ 'top': 0 }, 100));
                    }
                    drag.offset({ 'top': posParentTop });
                } else if (posNew + drag.height() > posParentBottom) {
                    if (drag.next().length > 0) {
                        drag.insertAfter(drag.next().css({ 'top': drag.height() }).animate({ 'top': 0 }, 100));
                    }
                    drag.offset({ 'top': posParentBottom - drag.height() });
                } else {
                    drag.offset({ 'top': posNew });
                    if (posOld - posNew > drag.height() + 2) {
                        drag.insertBefore(drag.prev().css({ 'top': -drag.height() }).animate({ 'top': 0 }, 100));
                        drag.css({ 'top': 0 });
                        posOld = drag.offset().top;
                        posOldCorrection = e.pageY - posOld;
                    } else if (posNew - posOld > drag.height() + 2) {
                        drag.insertAfter(drag.next().css({ 'top': drag.height() }).animate({ 'top': 0 }, 100));
                        drag.css({ 'top': 0 });
                        posOld = drag.offset().top;
                        posOldCorrection = e.pageY - posOld;
                    }
                }
            } else {
                mouseUp();
            }
        };
        var mouseUp = function() {
            $(document).off('mousemove', mouseMove).off('mouseup', mouseUp);
            $(document).off('mousedown', mouseMove);
            drag.animate({ 'top': 0, 'bottom': 0 }, 100, function() {
                drag.removeClass('dragActive');
            });
        };
        $(document).on('mousemove', mouseMove).on('mouseup', mouseUp).on('contextmenu', mouseUp);
        $(document).on('mousedown', mouseMove);
        $(window).on('blur', mouseUp);
    });
}

