$('.open_menu').on('click', function(){
    $('header .wrp nav').show()
    $('.light').show()
});

$('.light').on('click', function(){
    $('header .wrp nav').hide()
    $('.light').hide()
});

var valBtn =  $('.sec1_shiphang .col_r .top .nb').val()
var Tops = $('.sec1_shiphang .col_r .top .btn .nb')
    $(Tops).each(function(item, index){
        var number = $(this).text()
        var cong = $(this).next()
        var tru = $(this).prev()
        $(cong).on('click', function(){
            number++
            $(Tops).text(number)
        })
        })
        

// $('.font .add button').click(function(){
//     $('.sec1_gtct .des').animate({
//         fontSize: '+=2px',
//     });
// });
// $('.font .tru button').click(function(){
//     $('.sec1_gtct .des').animate({
//         fontSize: '-=2px',
//     });
// });

$('.sec1_tc .boxZ .btn').on('click', function(){
    var val = $(this).attr('data');
    if($(this).hasClass('active')) return;
    $('.sec1_tc .boxZ .btn').removeClass('active');
    $('.sec1_tc .boxjs').removeClass('active');
    $(this).addClass('active');
    $(val).addClass('active');
})
$('.banner .owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav:false,
    autoplay:true,
    autoplayTimeout:1000,
    animateOut: 'fadeOut',
   
})

$('.sec4_tc .wrp .right.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav:false,
    autoplay:true,
    autoplayTimeout:1000,
    animateOut: 'fadeOut',
   
})

$('.sec5_monngon .wrp .right.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav:false,
    autoplay:true,
    autoplayTimeout:1000,
    animateOut: 'fadeOut',
})

