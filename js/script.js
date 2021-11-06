$(document).ready(function () {
    $("#profilr_btn").click(function() { 
        $("#profile").toggle().removeClass(".md:block");
        $("#main").toggleClass().removeClass(".md:grid-cols-8");
        // $("#main").addClass("py-8");
        
    });

    $("#open_search").click(function () { 
        $("#search_div").toggle().removeClass(".hidden");
        
    });

    $("#close_search").click(function () { 
        $("#search_div").toggle().addClass(".hidden");
        
    });
    $("#open_profile").click(function () { 
        $("#profile_mb").toggle().removeClass(".hidden");
        
    });
    $("#close_profile").click(function () { 
        $("#profile_mb").toggle().addClass("hidden");
        
    });
    // $("#main").scroll(function () { 
    //     $("#dashboard_top").scrollTop().toggleClass(".hidden");
    // });
    
    $("#sign_in").click(function () { 
        $("#modal").toggle().removeClass("hidden");
        
    });

    $("#close_modal").click(function () { 
        $("#modal").toggle().removeClass("hidden");
        
    });

});