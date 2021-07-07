$(document).ready(function() {
    //banner top
    $('.slideSlick').slick({
        infinite: true,
        autoplay: true,
        speed: 800,
        arrows: false,
        dots: true,
    });
    // news
    $('.newsSlick').slick({
        autoplay: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        lazyLoad: 'progressive',
        arrows: true,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: "<button type='button' class='my-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='my-next pull-left'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [{
                breakpoint: 813,
                settings: {
                    arrows: true,
                    lazyLoad: 'progressive',
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });
    //customer slide
    $('.cus_slide').slick({
        infinite: true,
        autoplay: true,
        lazyLoad: 'progressive',
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        prevArrow: "<button type='button' class='cus-prev '><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='cus-next '><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [{
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    // banner 
    $('.project_slide').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });
    // about us 
    $('.aboutUs_slide').slick({
        autoplay: false,
        speed: 800,
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 812,
            settings: {
                arrows: false,
                centerPadding: '20px',
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }]
    });
    $('.lazy').lazy({
        effect: "fadeIn",
        effectTime: 2000,
        threshold: 0
    });
    // scroll to top 
    $('.go__top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
    // DETAIL PRODUCTS + ZOOM
    $('.detail_slide').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        arrows: false,
        dots: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 812,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
    });
    // get current slide
    // $('.detail_slide').on('afterChange', function(event, slick, currentSlide, nextSlide){
    // });
    // detail click heart 
    $('.click-heart').click(function() {
        $(this).toggleClass('red-heart');
    });
    // active slide 
    $('.slick-current').addClass('slide__active');
    $(document).on('click','.detail_slide .box_detail',function(){
        $('.detail_slide .slick-slide').removeClass('slide__active');
        $(this).closest('.slick-slide').addClass('slide__active');
    });
    // click tab
    $(document).on('click','.clickTab',function(){
            $('.clickTab').removeClass('active');
            $(this).addClass('active');
    });
});
// detail plus minus
function quantity(el, type) {
    let spanNumber = document.querySelector('.quantity');
    let pareNumber = parseInt(spanNumber.textContent);
    // trừ
    if (type == "minus") {
        if (pareNumber > 1) {
            let detail_count = pareNumber - 1;
            console.log(detail_count);
            $(spanNumber).html(detail_count);
            $('#input_qty').val(detail_count);
        }
    }
    // cộng
    if (type == "plus") {
        let detail_count = pareNumber + 1;
        console.log(detail_count);
        $(spanNumber).html(detail_count);
        $('#input_qty').val(detail_count);
        // debugger;
    }
}
 // delete item cart
 function delItem(el,id)
 {
     $(el).closest('tr').remove();
     Calc_Total();
     // $.ajax({
     //     method: "POST",
     //     data: { id: id },
     //     success: function(response){
              
     //     }
     // });
 }
 // calc item cart 
 function quantity_cart(el, type) {
    let spanNumber = $(el).closest('tr').find('.quantity');  // tìm element số lượng
    let currentTotal = $(el).closest('tr').find('.p_total'); // tìm element tổng tiền
    let inputTotal = $(el).closest('tr').find('.input_total'); // tìm input tổng tiền
    let priceItem  = parseInt($(el).closest('tr').find('.input_price').val()); // lấy giá tiền
    let pareNumber = parseInt(spanNumber[0].textContent); // lấy số lượng + parse
    // trừ
    if (type == "minus") {
        if (pareNumber > 1) {
            let detail_count = pareNumber - 1;
            let calc = detail_count * priceItem;
            (inputTotal).val(calc);
            calc = calc.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
            let remove_Currency = calc.replace(/ ₫/g,'');
            $(spanNumber).html(detail_count);
            $('#input_qty').val(detail_count);
            $(currentTotal).html(remove_Currency);
            Calc_Total();// tính tổng tiền mỗi lần giảm số lượng
        }
    }
    // cộng
    if (type == "plus") {
        let detail_count = pareNumber + 1;
        let calc = detail_count * priceItem;
        (inputTotal).val(calc);
        calc = calc.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
        let remove_Currency = calc.replace(/ ₫/g,'');
        $(spanNumber).html(detail_count);
        $('#input_qty').val(detail_count);
        $(currentTotal).html(remove_Currency);
        Calc_Total(); // tính tổng tiền mỗi lần tăng số lượng
    }
}
//tính tổng tiền dùng cho (xóa item, tăng giảm số lượng)
function Calc_Total()
{
    let changeTotal = 0;
    let CalcTotal = document.querySelectorAll('.itemCart');
    $(CalcTotal).each(function(key, obj, i){
         changeTotal +=  parseInt($(obj).find('.input_total').val());
    });
    let formatTotal = changeTotal.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    let remove_Currency = formatTotal.replace(/ ₫/g,'');
    $('#totalPay').val(changeTotal);
    $('.total_price').html(remove_Currency);
}
//banner fix until scroll
window.onscroll = function() {
    scrollFunction();
};
// Define visible sticky menu
var banner = document.querySelector('#banner');
var origOffsetY = banner.offsetTop + 2;

function scrollFunction() {
    // Visible sticky menu
    if (window.scrollY >= origOffsetY) {
        banner.classList.add('sticky')
    } else {
        banner.classList.remove('sticky');
    }
}
//back to top
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.go__top').fadeIn(200);
    } else {
        $('.go__top').fadeOut(200);
    }
});
//back to top End