jQuery(window).on('load resize', function () {
  var winW = jQuery(window).width();
  var devW = 767;
  if (winW <= devW) {
    jQuery(".nav_children ").hide();


  } else {
    jQuery(".nav_children ").hide();
  }
});
jQuery(document).ready(function () {

  var winW = jQuery(window).width();
  var devW = 767;
  if (winW <= devW) {

    jQuery(".openbtn1").on('click', function () {

      jQuery(this).toggleClass("active");
      jQuery(".nav_wrap").toggleClass("active");

    });
    jQuery(".has_child > a").on('click', function (e) {
      e.stopPropagation();
      jQuery(this).toggleClass("active");
      jQuery(".nav_children").stop(true, true).toggle('0.3s');
      return false;
    });
  } else {
    jQuery('.has_child ,.nav_children,.has_child .cursel').hover(
      function () {
        jQuery(".nav_children").stop();
        // jQuery(this).addClass("active");
        jQuery(".nav_children ").slideDown();
        // console.log("fire");

      },
      function () {
        // jQuery(this).removeClass("active");
        //マウスカーソルが離れた時の処理
        jQuery(".nav_children").stop();
        jQuery(".nav_children ").slideUp();

      }
    );
  }

})

jQuery(function () {
  jQuery('a[href^="#"]').click(function () {
    let speed = 500;//ここでスクロールスピードを調整します。
    let href = jQuery(this).attr("href");
    let target = jQuery(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;//ここで移動する位置を決定しているのでヘッダー分ずらしたいなどがあればここを調整
    jQuery("html, body").animate({ scrollTop: position }, speed, "linear");
    return false;
  });
});