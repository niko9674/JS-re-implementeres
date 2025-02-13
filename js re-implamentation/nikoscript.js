//*array
let colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffccff"]; 

//*jQuery
$(document).ready(function () {
   
    let boxes = $(".box, .big-box");

 
    boxes.each(function (index) {
        
        let colorIndex = index % colors.length; 
        $(this).css("background-color", colors[colorIndex]);

    //*event pop-up    
        $(this).click(function () {
            alert(`Box ${index + 1} clicked!`);
        });
    });

    //*Loop og if-else
    boxes.each(function (index) {
        if (index % 2 === 0) {
            $(this).css("border", "2px solid blue");
        } else {
            $(this).css("border", "2px solid yellow");
        }
    });
    //* event-farveskift
    $(".logo").hover(
        function () {
            $(this).css("color", "yellow"); 
        },
        function () {
            $(this).css("color", "black"); 
        }
    );
});
