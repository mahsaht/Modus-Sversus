// -------------Designer Slider Setting----------------------
$(document).ready(function(){
    $('.designer-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        speed:1000,
        arrows:false,
        infinite: false,
        cssEase:'cubic-bezier(.77,0,.18,1)',
        draggable:false
    });
});

// -------------Designer Slider: Scroller----------------------
$('.designer-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    left=85+116*nextSlide;
    left="left:"+left+"px;";
    document.getElementById("scroller").setAttribute("style",left.toString()+"color:#e6635c;");    
});

$('.designer-slider').on('afterChange', function(event, slick, currentSlide){  
   left=85+116*currentSlide;
    left="left:"+left+"px;";
    document.getElementById("scroller").setAttribute("style",left.toString()+"color:rgb(176, 176, 176);");
});




// -------------Designer Slider2 Next Arrow----------------------
function next(){
    $('.designer-slider').slick('slickNext'),true;
}

// -------------Designer Slider2 Prev Arrow----------------------
function prev(){
    $('.designer-slider').slick('slickPrev'),true;
}
        
