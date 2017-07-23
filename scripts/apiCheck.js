$(document).ready(function() {
        $.ajax({
        type: "GET",
        url: "https://api.guildwars2.com/v2/quaggans",
        complete: function(){
            $("#loader").hide();
        },
        success: function(data) { alert( 'API is ONLINE!' ); console.log("API online"); },
        error: function(data) { alert( 'API is OFFLINE!' ); console.log(data); }
    })
    });