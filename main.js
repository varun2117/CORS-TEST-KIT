function main() 
{
    console.log("vk-cors-test");
    $.ajax
    ({
        url: "<Any URL INTENDED>",
        success: function(data) 
        {
            console.log(data);
        }
    });
}
