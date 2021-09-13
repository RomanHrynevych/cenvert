function measureText(txt, font) {
    var id = 'text-width-tester',
        $tag = $('#' + id);
    if (!$tag.length) {
        $tag = $('<span id="' + id + '" style="display:none;font:' + font + ';">' + txt + '</span>');
        $('body').append($tag);
    } else {
        $tag.css({ font: font }).html(txt);
    }
    return {
        width: $tag.width(),
        height: $tag.height()
    }
}

function shrinkToFill(input, fontSize, fontWeight, fontFamily) {
    var $input = $(input),
        txt = $input.val(),
        maxWidth = $input.width() + 5,
        font = fontWeight + " " + fontSize + "px " + fontFamily;
    var textWidth = measureText(txt, font).width;
    if (textWidth > maxWidth) {
        fontSize = fontSize * maxWidth / textWidth * .9;
        font = fontWeight + " " + fontSize + "px " + fontFamily;
        $input.css({ font: font });
    } else {
        $input.css({ font: font });
    }
}

function minmax(value, min, max) {
    // alert(value);
    var length = value.length;
    if (length > 1) {
        if (value[0] == 0 && value[1] != '.') {
            value = value.substr(1);
        }
    }
    if (parseInt(value) < min || isNaN(parseInt(value))) {
        return min;
    } else if (parseInt(value) > max) {
        return max;
    } else return value;
}

(function($) {
    $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    };
}(jQuery));