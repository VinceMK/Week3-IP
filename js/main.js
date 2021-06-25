$(document).ready(function() {
    
    $('#details').click(function() {
        $('#details').hide();
        $('#design').show();
        $('#design').click(function(){
            $('#design').hide();
            $('#details').show();

        });

    });

    $('#details2').click(function() {
        $('#details2').hide();
        $('#development').show();
        $('#development').click(function(){
            $('#development').hide();
            $('#details2').show();

        });

    });

    $('#details3').click(function() {
        $('#details3').hide();
        $('#product').show();
        $('#product').click(function(){
            $('#product').hide();
            $('#details3').show();

        });

    });

});

$(document).ready(function() {
    let day = new Date();
    let yr = day.getFullYear();

    const yrs = document.getElementById("yrs");

    yrs.innerHTML = "© " + yr + " Copyright:";
});

    



