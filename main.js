$('.main').slideUp(0);
document.body.onload = function () {
    setTimeout(()=>{
        $('.preloader').slideUp(500);
        setTimeout(function () {
            $('.main').slideDown(500);
        }, 250)
    }, 5000)
}

$('.main__search-btn').click(function (){
    if ($(".main__input").val() !== '') {
        $(this).attr('href', 'https://www.google.com/search?q=' + $('.main__input').val())
    }
})