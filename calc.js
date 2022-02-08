$(document).ready(function () {
  var resultat = $("div#resultat");
  resultat.hide();

  $("#form-nombres").submit(function (event) {
    $(document).ready(function () {
      $('button[id^="button"]').click(function () {
        alert("clicked " + $(this).val());
        $.ajax({
          type: "Get",
          url: "http://149.202.187.165/JadeTest/webresources/calc/query?a=5&b=8&operation=*",
          success: function (data) {
            alert(data);
          },
        });
      });
    });

    $(function(){
      var url = 'http://149.202.187.165/JadeTest/webresources/calc/query?a=5&b=8&operation=*';
      var regEx = /([?&])
    })
  

    //function calcs() {
    //alert("5*8 =" + 5 * 8);
    //}

    //$(document).ready(calcs);

    //var som = 0;
    //var a = parseInt($("input[name=a]").val(), 0);
    //var b = parseInt($("input[name=b]").val(), 0);
    //var som = a * b;
    //$("#somme").text(a * b);
    //resultat.show();
    //event.preventDefault();
  });
});
