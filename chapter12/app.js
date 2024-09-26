$(function(){
  function loadImages(){
    let srcList = []; //画像の参照先を格納する配列
    let loadIndex = 0; //読み込み画像のインデックス

    //画像を表示する
    function open(){
      $("#main").find('img').css({
        'display': 'block',
        'opacity': 0
      }).animate({'opacity':1}, 1200);
    };

    //全ての画像の読み込み完了
    function complete(){
      open();
    };

    //画像の読み込み完了
    function loaded(){
      if( loadIndex != (srcList.length-1)){
        loadIndex++;
        imgLoad();
      }else{
        complete();
      };
    };

    //画像の読み込み
    function imgLoad(){
      let img = new Image();
      $(img).on('load', loaded).attr('src',srcList[loadIndex]);
    };

    //初期設定
    function init(){
      $('#main').find('img').each(function(index){
        srcList[index] = $(this).attr('src');
      });
      imgLoad();
    };
    init();
  };
  loadImages();
});