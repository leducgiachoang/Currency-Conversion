$(function () {
    $('.selectpicker1').selectpicker();
    $('.selectpicker2').selectpicker();
    $('.selectpicker3').selectpicker();
    $('.selectpicker4').selectpicker();
});

$(document).ready(function(){
    $('.donate_item input').click(function(){
        var key = $(this).attr('key');
        navigator.clipboard.writeText(key);
        $(this).select();
        $(this).siblings('div')[0].innerText = 'COPIED';
        $(this).siblings('div').css({'display': 'block'});
        
        // var b = $(this).siblings('div');
        setInterval(function(){
            $('.donate_item .mess_coin_copy').css({'display': 'none'});
        }, 3000);
    })
})
  