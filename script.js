$(document).ready(function(){
    $('ul').click(function(){
        $('ul').toggleClass('active');
        $('.backgroundBlock').toggleClass('dark');
        $('.textBlock').toggleClass('dark');
        $('body').toggleClass('dark');

    });
});