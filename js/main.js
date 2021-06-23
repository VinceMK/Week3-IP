$(document).ready(function() {

    $('#details').click(function() {
        $('#details').hide();
        $('#design').show();
        $('#design').click(function(){
            $('#design').hide();
            $('#details').show();

        });

    });

});