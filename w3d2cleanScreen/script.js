$(function () {
    function generateRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    var width=0;
    var growthAmount=0;
    var growthrate=0;
    var numberOfCircles=0;
    function growingTime(e,growthAmount,growthrate) {
        setInterval(function () {
            const h = parseInt($(e).css('height'));
            const w = parseInt($(e).css('width'));
            const hh = h + parseInt(growthAmount);
            const ww = w + parseInt(growthAmount);
            $(e).css({
                'height': hh + "px",
                'width': ww + "px"
            })
        }, growthrate);

    }
    $("#start").click(function () {
        width=$("#width")[0].value;
        growthAmount=$("#growthAmount")[0].value;
        growthrate=$("#growthRate")[0].value;
        numberOfCircles=$("#circles")[0].value;
        console.log(width, growthAmount, growthrate);
        for(let i=0;i<numberOfCircles;i++) {
            $("body").append($("<div>"))
        }
        $("div").not(".form").each(function (id, e) {
            $(e).css("background-color", generateRandomColor())
            $(e).css({
                "position": "absolute",
                'height': width+"px",
                'width': width+"px",
                'border-radius': "50%",
                'border': "1px solid black",
                'left': randomNumber(100, 1400),
                'top': randomNumber(100, 800)
            })
            growingTime(e,growthAmount,growthrate);

            $(e).click(function () {
                $(this).hide();
            })
            // $(e).hover(function(){
            //     $(e).fadeTo("slow",0.4);
            // })
            // $(e).mouseleave(function(){
            //     $(e).fadeTo("slow",1);
            // })
        })
        }) 
    // for(let i=0;i<5;i++){
    //     $("body").append($("<div>"))
    // }
    
   
    $("div").not(".form").each(function (id,e) {
      $(e).mouseenter(function(){
          $(this).fadeTo("slow",0.4);
      })
      $(e).mouseleave(function(){
          $(this).fadeTo("slow",1);
      })
    })
})

