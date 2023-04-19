function main() 
{
    console.log("vk-cors-test");
    $.ajax
    ({
        url: "https://app.radiant.capital",
        success: function(data) 
        {
            console.log(data);
        }
    });
}