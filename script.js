
$(document).ready(function(){
    $(".add-to-bag").on("click", ()=>{
        $("#container").css("visibility", "visible")
    })
    
    $("#cancel").on("click", ()=>{
        $("#container").css("visibility", "hidden");
    })


})