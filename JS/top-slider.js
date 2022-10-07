
        // -------------Top Slider Setting----------------------
        $(document).ready(function(){
            $('.top-slider').slick({
                slidesToShow: 1,
                arrows:false,
                speed:1500,
                autoplay:true,
                cssEase:'cubic-bezier(.68,-0.55,.27,1.55)',
                pauseOnFocus:false,
            });
        });


        // -------------Top Slider Navigator----------------------
        function go(num){
            $('.top-slider').slick('slickGoTo',num),true;

            //-------background color: reset all
            document.getElementById("nav-controller0").setAttribute("style","background-color:#acb5b2");
            document.getElementById("nav-controller1").setAttribute("style","background-color:#acb5b2");
            document.getElementById("nav-controller2").setAttribute("style","background-color:#acb5b2");
            //-------background color set for the selected one
            controller="nav-controller"+num;
            document.getElementById(controller).setAttribute("style","background-color:#e7524b");    
        }



        // -------------Top Slider Arrow & Navigator Synch----------------------
        $('.top-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
             go(nextSlide);
        });


        // -------------Top Slider Next Arrow----------------------
        function next(){
            $('.top-slider').slick('slickNext'),true;
        }

        // -------------Top Slider Prev Arrow----------------------
        function prev(){
            $('.top-slider').slick('slickPrev'),true;
        }
        
