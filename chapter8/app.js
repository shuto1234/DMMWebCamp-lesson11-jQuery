$(function(){
  
  let photo = $("#photo")

  // 画像が右スライドする
  function slideToRight(){
    photo.animate({'left':356},1800, 'swing', function(){setTimeout(slideToLeft, 3000);});
  };

  // 画像が左スライドする
  function slideToLeft(){
    photo.animate({"left":0},1200 , 'swing' ,function(){setTimeout(slideToRight, 3000);});
  };

  slideToRight();
});

// $(".btn").on("click",function(){
//   $(".box1").animate(2000, 'swing', complete);
// });


// $(".btn").click(function(){
//   $(".box1").animate({
//     'width':300 ,
//     'height':300
//   },1800, 'swing', complete);
// });

// 回答
$(function(){
  $(".btn").click(function(){
    $(".box1").animate({
      width: "+=200",
      height: 200,
      opacity: 0.5,
      margin: "+=10",
    });
  });
});