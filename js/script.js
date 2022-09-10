jQuery(document).ready(function ($) {


  $(document).on('click', '.scroll', function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

  /*animate number*/
  var textPos = $('.progress-block').offset().top,
  comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
  $(window).scroll(function() {

    var topOfWindow = $(window).scrollTop();

    if($('.progress-block').hasClass('is-run')){
      return;
    }

    if (textPos < topOfWindow + 500) {
      $('#numbers-1').animateNumber({
        numberStep: comma_separator_number_step,
        number: 123341976,
      },3000);

      $('.progress-block').addClass('is-run');
    }
  });

  /* animation*/
  AOS.init({
    /*disable: 'mobile',*/
  });

  /*tabs*/
  (function($){
    jQuery.fn.lightTabs = function(options){

      var createTabs = function(){
        tabs = this;
        i = 0;

        showPage = function(i){
          $(tabs).find(".tab-content").children("div").hide();
          $(tabs).find(".tab-content").children("div").eq(i).show();
          $(tabs).find(".tabs-menu").children("li").removeClass("is-active");
          $(tabs).find(".tabs-menu").children("li").eq(i).addClass("is-active");
        }

        showPage(0);

        $(tabs).find(".tabs-menu").children("li").each(function(index, element){
          $(element).attr("data-page", i);
          i++;
        });

        $(tabs).find(".tabs-menu").children("li").click(function(){
          showPage(parseInt($(this).attr("data-page")));
        });
      };
      return this.each(createTabs);
    };
  })(jQuery);
  $(".tabs").lightTabs();


  /*faq*/
  $(function() {
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
    $(document).on('click', '.accordion > .accordion-item .accordion-thumb', function (e){
      $(this).parent('.accordion-item').siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
      $(this).parent('.accordion-item').toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    })
  });

 /* mob menu*/
  $(document).on('click', '.open-menu a', function (e){
    if($('html').hasClass('is-menu')){
      $.fancybox.close();
    }else{
      $.fancybox.open( $('#menu-responsive'), {
        touch:false,
        autoFocus:false,
        animationDuration : 600,
        animationEffect   : 'slide-in-out',
        afterShow : function(e){
          $('html').addClass('is-menu');
        },
        afterClose: function () {
          $('html').removeClass('is-menu');
        }
      });
    }
  })


});