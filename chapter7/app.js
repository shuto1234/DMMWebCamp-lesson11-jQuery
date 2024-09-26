$(function(){
  let photo = $('#photo'); // 画像のセレクタ

  // 画像がフェードインする
  function open(){
    photo.fadeIn(3000, 'swing', function(){setTimeout(close, 3000);});
  };

  // 画像がフェードアウトする
  function close(){
    photo.fadeOut(1500, 'swing', function(){ setTimeout(open, 1500);}); 
  };

  open();
});



$(function(){
  let target = $('#target');
  $(function(){
    $('#button').click(function(){
      target.fadeIn(3000, 'swing', function(){setTimeout(close, 3000);});
    });
    });
});

// 回答
$("#button2").on("click",function(){
  $("#target2").fadeIn("slow");
});