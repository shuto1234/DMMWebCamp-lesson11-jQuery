$(function () {

  // ハンバーガーメニューのクリックイベント
  $(".toggle_btn").on('click',function(){
    $(".toggle_btn").toggleClass("open");
    $(".nav-menu,.nav-sns").slideToggle();
  });
  
  // ページ内リンクのイベント
  $('a[href^="#"]').click(function () {
    // ハンバーガーメニューを閉じる
    // $(".toggle_btn").removeClass("open");
    // $(".nav-menu,.nav-sns").removeClass();
    $("#pickup").on('click',function(){
      $('.toggle_btn').toggleClass("open");
      $(".nav-menu,.nav-sns").slideToggle();
    });

    // スクロールスピード
    let speed = 800;

    // 各aタグに指定されたhref属性を取得する
    let href = $(this).attr("href");

    let target = $(href == "#" || href == "" ? 'html':href);

    // ※offset()メソッドはtop,leftをプロパティに持つオブジェクトを返す
    // let position = $(href).offset().top;
    let position = target.offset().top;

    // 取得した位置へ1秒でアニメーションスクロールする
    $("body,html").animate({ scrollTop: position }, speed, 'swing');

    // aタグのデフォルト動作(画面遷移)を取り消す
    return false;
  });
  // カルーセル表示と自動再生
  $('.slick-area').slick({
    slidesToShow: 3,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 0,
    speed:5000,
    centerMode: true,
    arrows:false,
  });
  // スクロール時の画像のフィードイン

});
