$(document).ready(function(){
    $(document).on("click", "#myTopnav .icon", function(){
        var topnav = $("#myTopnav");
        if ( topnav.hasClass("topnav") && !topnav.hasClass("responsive"))
        {
            topnav.addClass("responsive");
        }
        else
        {
            if ( topnav.hasClass("responsive") )
            {
                topnav.removeClass("responsive");
            }
        }
    });
});