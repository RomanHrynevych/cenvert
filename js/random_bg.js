(function(){

  function currency(numberOfCurrency, divID){
    var chosenDiv = document.getElementById(divID);
    chosenDiv.style.display = "block";
    chosenDiv.innerHTML = "";
    function randomFrom(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    var text = "";
    let i; 
    for (i = 0; i < numberOfCurrency; i++) {
        bigRange = Array.apply(null, Array(100)).map(function (_, i) {return i;});
        smallRange = Array.apply(null, Array(3)).map(function (_, i) {return i;});
        tenRange = Array.apply(null, Array(5)).map(function (_, i) {return i;});
        CurTwinkleStage = Math.floor(Math.random() * 12) + 1;
        height = Math.floor(Math.random() * 10) + 15;

        var top = randomFrom(bigRange) - 5;
        var rotate = Math.floor(Math.random() * 360);
        var right = randomFrom(bigRange) + 2;
        var opacity = Math.floor(Math.random() * 40) + 20;
       
        

        text += "<object type='image/svg+xml' data='img/curr/" + CurTwinkleStage + ".svg'";
        text += "style='height: " + height + "px; width: " + height + "px;";
        text += "top: " + top + "%; right: " + right + "%; opacity: 0." + opacity +";";
        text += "transform: rotateZ(" + rotate + "deg);'";
        text += ">";
        text += "<img src='img/curr/" + CurTwinkleStage + ".svg'";
        text += "style='height: " + height + "px; width: " + height + "px;";
        text += "top: " + top + "%; right: " + right + "%; opacity: 0." + opacity +";";
        text += "transform: rotateZ(" + rotate + "deg);'";
        text += "alt=''>";
        text += "</object>";

        chosenDiv.innerHTML = text;
    }
}
    var height = $(document).height();
    document.getElementById('demo').style.minHeight = height + "px";

    var clientHeight = document.getElementById('start').clientHeight;

    var buffer = clientHeight;

    if (clientHeight < height) {
        buffer = height;
    }

    var start_height = $('#start').height();

    document.getElementById('demo').style.height = buffer - start_height + "px";
    var demo_height = $('#demo').height();
    // document.getElementById('demo').style.marginTop = start_height + "px";
    document.getElementById('start').style.marginTop = -demo_height + "px";

    if (clientHeight / 10 > 250) {
        clientHeight = 2500;
    }

    currency(clientHeight / 10, "demo");

})();