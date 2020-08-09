var zoomx = 100;
  $(document).ready(function() {
    $(".gnb").hover(
      function() {
        $(".snb").stop().slideDown(400);
      },
      function() {
        $(".snb").stop().slideUp(600);
      }
    );

    $(".snb").hover(
      function() {
        $(".snb").stop().slideDown(400);
      },
      function() {
        $(".snb").stop().slideUp(600);
      }
    );

    $(".tabBtn").hover(
      function() {

        $(this).children(".icon_normal").css("display","none");
        $(this).children(".icon_over").css("display","block");
      },
      function() {
        $(this).children(".icon_over").css("display","none");
        $(this).children(".basic").css("display","block");
      }
    );

    $(".tabBtn").click(
      function() {

        $("."+$(this).attr("tarx")).children(".icon_normal").addClass("basic");
        $("."+$(this).attr("tarx")).children(".icon_over").removeClass("basic");
        $(this).children(".icon_over").addClass("basic");
        $(this).children(".icon_normal").removeClass("basic");

        $("."+$(this).attr("tarx")).children(".icon_over").css("display","none");
        $("."+$(this).attr("tarx")).children(".icon_normal").css("display","none");
        $("."+$(this).attr("tarx")).children(".basic").css("display","block");


        $("."+$(this).attr("tarc")).css("display","none");
        $("#"+$(this).attr("tar")).css("display","block");

        $("#"+$(this).attr("tarmc")).attr("href", $(this).attr("tarm"));

      }
    );

  });
function body_zoomin() {
  zoomx = zoomx + 10;
  $("body").css("zoom",zoomx + "%");
}
function body_zoomout() {
  zoomx = zoomx - 10;
  $("body").css("zoom",zoomx + "%");
}
function body_zoomdef() {
  zoomx = 100;
  $("body").css("zoom",zoomx + "%");
}
function newWin(url,w,h) {
window.open
(url,'new_win','width='+w+',height='+h+',toolbars=no,menubars=no,scrollbars=auto');
}
