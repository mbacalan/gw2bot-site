function checkApi(){
    $.ajax({
        type: "GET",
        url: "checkApi",
        success: function(data) { alert( 'API is ONLINE!' ); console.log(data); },
        error: function(data) { alert( 'API is OFFLINE!' ); console.log(data); }
    })
  }