function checkApi(){
    $.ajax({
        type: "GET",
        url: "checkApi",
        success: function(data) { alert( 'api works, beatch' ); console.log(data); },
        error: function(data) { alert( 'api doesn\'t work, beatch' ); console.log(data); }
    })
  }