    /* ハンバーガーボタンが押された状態 */

    /* <div>右上の三本線「.openbtn1」に「.active」が追加付与され、 */
    /* <nav>ナビゲーションのパネル「.navigation」に「.panelactive」が追加付与される。 */
    /* toggleClassなので、2回押したら元の状態に戻る。 */



    $(".openbtn").click(function () {
        $(this).toggleClass("active");
        $(".navigation").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
    });


    //ナビゲーションのリンクがクリックされた際に、activeクラスが除去される。
    $(".navigation a").click(function () {
        $(".openbtn").removeClass("active");
        $(".navigation").removeClass("panelactive");
    });

    // （★備忘メモ★)toggleClassは、on offを繰り返す。addClass、removeClassは、繰り返さない。