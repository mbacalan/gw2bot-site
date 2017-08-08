$(document).ready(function() {
        $.ajax({
        type: "GET",
        url: "https://api.guildwars2.com/v2/quaggans",
        complete: function(){
            $("#loader").hide();
        },
        success: function() { $('#apistatus').text('API is Online! ☑') },
        error: function() { $('#apistatus').text('Error reaching API ☒') }
    })
    });