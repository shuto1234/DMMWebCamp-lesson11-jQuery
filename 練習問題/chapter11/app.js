// $(function() {
//   $('.tab > .active').on('mouseenter',function(){
//     $('.2').next().slideDown();
//   });
// });
// $(function() {
//   $('.1').on('mouseleave',function(){
//     $('.2').next().slideUp();
//   });
// });

$(function(){
  let tab = $('.tab > li'),
      content = $('.content > li');

  tab.on('click',function(){
    let idx = tab.index($(this));
    tab.removeClass("active").eq(idx).addClass("active");
    content.removeClass("active").eq(idx).addClass("active");
  });
});