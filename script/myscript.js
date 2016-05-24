$(document).ready(function(){
    $(function(){
        $('#header_nav').data('size','big');
    });

    $(window).scroll(function(){
        if($(document).scrollTop() > 0)
        {
            if($('#header_nav').data('size') == 'big')
            {
                $('#header_nav').data('size','small');
                $('.header').slideUp();
            }
        }
        else
        {
        if($('#header_nav').data('size') == 'small')
        {
            $('#header_nav').data('size','big');
                $('.header').slideDown(function(){
                    $('.body').css('top', '270px');
                });
        } 
    }
    });
});
