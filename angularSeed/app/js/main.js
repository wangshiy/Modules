/*
 *
 *   template html pages JS
 *
 */
$(document).ready(function () {

    // Search page
    // Click Choose filter button show or hide tags
    $("#showCategory").click(function(){
        $("#categoryTab").toggle();
    });

    //show or hide more hits for search result
    $("#srh-rst").on('click','.moreHit', function(){
        var hasHide = $(this).parent().find(".moreItems div.hit-item").hasClass("show-first-hit");
        if(hasHide) {
            $(this).parent().find(".moreItems div.hit-item").removeClass("show-first-hit");
        } else {
            $(this).parent().find(".moreItems div.hit-item").addClass("show-first-hit");
        }
                        
    });

    //Click bouton to resize font size
    $("#fontResize").click(function(){
        var bodySize = $("body").css('font-size');
        var searchSize = $(".search-result p").css('font-size');
         
        if(bodySize == "13px") {
            $("body").addClass("font-resize");
        } else if (bodySize == "15px"){
            $("body").removeClass("font-resize");
        };
         
        if(searchSize == "12px") {
            $(".search-result p").addClass("font-resize");
        } else if (searchSize == "15px"){
            $(".search-result p").removeClass("font-resize");
        }
    });

    // Tag management page
    // Show the add name or tag form
    $("#changeNameBtn").click(function(){
        $(".hideBtnArea").addClass("hidden");
        $("#changeNamePan").removeClass("hidden");
    });
         
    // Hide the add name or tag form                   
    $("#cancelNamePanBtn").click(function(){
        $("#changeNamePan").addClass("hidden");
        $(".hideBtnArea").removeClass("hidden");
    });

    // User Account page
    // Show the change password form
   $("#changePasswordBtn").click(function(){
        $("#changePasswordBtn").addClass("hidden");
        $("#changePasswordPan").removeClass("hidden");
    });

    // hide the change password form
    $("#cancelBtn").click(function(){
        $("#changePasswordPan").addClass("hidden");
        $("#changePasswordBtn").removeClass("hidden");
    });


});


