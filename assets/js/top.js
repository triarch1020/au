$(function() {
  $('.cat_tab').on('click', function() {
    $('.cat_tab, .ranking_item').removeClass('active');

    $(this).addClass('active');

    var index = $('.cat_tab').index(this);
    $('.ranking_item').eq(index).addClass('active');
  });

});
