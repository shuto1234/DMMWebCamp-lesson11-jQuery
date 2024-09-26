$(function () {

  // ハンバーガーメニューのクリックイベント
  $(".toggle_btn").on('click',function(){
    $(".toggle_btn").toggleClass("open");
    $(".nav-menu,.nav-sns").slideToggle();
  });
  // ページ内リンクのイベント
  $('a[href^="#"]').click(function () {
    // ハンバーガーメニューを閉じる
    // $(".menu-btn").removeClass("open");
    // $(".header_nav").removeClass("open");

    // 各aタグに指定されたhref属性を取得する
    var href = $(this).attr("href");

    // href属性で指定された要素(各section要素)をセレクタで指定し、位置を取得する
    // ※offset()メソッドはtop,leftをプロパティに持つオブジェクトを返す
    var pos = $(href).offset().top;

    // 取得した位置へ1秒でアニメーションスクロールする
    $("body,html").animate({ scrollTop: pos }, 1000);

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
