$(function(){
  function accordionMenu(target){

    let items = new Array(); //クリック要素のセレクタを格納する配列
    let boxes = new Array(); //クリック要素のセレクタを格納する配列
    let current; //スライドダウンしているインデックス

    function slideBox(index){
      if(current != undefined && current != index )close();
      current = index;
      switch(boxes[current].prop('mode')){
        case 'open': close(); break;
        case 'close': open(); break;
      };
    };

    // スライドダウン
    function open(){
      boxes[current].prop('mode','open').stop().slideDown();
      items[current].attr('src','images/menu' + current + '.png');
    };

    // スライドアップ
    function close(){
      boxes[current].prop('mode','open').stop().slideUp();
      items[current].attr('src','images/menu' + current + '.png');
    };

    // 初期設定
    function init(){
      $.each( target.find('dl'),function(i){
        items[i] = $(this).find('dt img');
        items[i].on('click',function(){
          slideBox(i);
        });
        boxes[i] = $(this).find('dd');
        boxes[i].prop('mode','close');
      });
    };
    init();
  };
  accordionMenu($('#accordion'));
});