$(document).ready(function(){
    
    let timer = 0; let opacityTimer = 0;
    let width = '50px'; 
    let growthAmount = 10; 
    let interval = 250; 
    let noOfCircles = 1;
    let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'tomato', 'pink', 'black', 'gray'];
    
    let div = null;

    let getRandom = (max) => Math.floor(Math.random() * max);
    
    
    $("[name='start']").click(() => {
        clearInterval(timer);
        $("body > div").remove();
        width = $("[name='width']").val() == '' ? width : parseInt($("[name='width']").val());
        growthAmount = $("[name='growthAmount']").val() == '' ? growthAmount : parseInt($("[name='growthAmount']").val());
        interval = $("[name='interval']").val() == '' ? interval : parseInt($("[name='interval']").val());

        noOfCircles = $("[name='noOfCircles']").val() == '' ? noOfCircles : $("[name='noOfCircles']").val();

        for(let i = 0; i < noOfCircles; i++) {
            div = $('<div>');
            div.css({
                "backgroundColor" : colors[getRandom(10)], 
                "width" : width, 
                "height" : width,
                "left" : getRandom(50) + '%',
                "top" : getRandom(50) + '%'
            });
            $('body').append(div);
        }
        timer = setInterval(() => {
            $('div').css("width", (parseInt(div.css("width")) + growthAmount) + "px");
            $('div').css("height", (parseInt(div.css("height")) + growthAmount) + "px");
        }, interval);

        $('div').click(function(){
            $(this).remove();
        });

        
    });

    $(document).on('mouseover', 'div', function(){
        let currentDiv = $(this);
        opacityTimer = setInterval(() => {
            if(parseFloat(currentDiv.css("opacity")) > 0)
            currentDiv.css(
                    "opacity", (parseFloat(currentDiv.css("opacity")) - 0.01)
                );
        }, 10);
    });
    $(document).on('mouseout', 'div', function(){
        $(this).css("opacity", 1);
        clearInterval(opacityTimer);
    });
   
});