{
    $.ajax({
            type: "GET",
            url: "https://api.guildwars2.com/v2",
            success: Online,
            error: Offline
        })}