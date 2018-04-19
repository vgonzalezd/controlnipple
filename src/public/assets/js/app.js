//frontend app

(function() {
  $(document).ready(function() {
    var base = $('base').text();
    //alert(base);
/*
    $(".moveButton").on("click touchstart",function(e){
        if(e.type=="click") {


          console.log(this.data);
          var movimiento=$(this).data('move');
          $.ajax({
            type: 'post',
            dataType: 'json',
            url: base + '/action',
            data: { move: movimiento },
          })
          .done(function(data) {
            console.log("success");
            console.log(data);
            //alert(data.result);
          })
          .fail(function() {
            console.log("error");
          })
          .always(function() {
            console.log("complete");
          });




            alert("Mouse");
            alert(e.type);
        }



        else if(e.type=="touchend"){
            alert("Touch");
            alert(e.type);
            e.preventDefault();
            e.stopPropagation();
        }
    });
*/






/*
    $('.moveButton').click(function() {
        console.log(this.data);
        var movimiento=$(this).data('move');
        $.ajax({
          type: 'post',
          dataType: 'json',
          url: base + '/action',
          data: { move: movimiento },
        })
        .done(function(data) {
          console.log("success");
          console.log(data);
          //alert(data.result);
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
    });
  */



    // if (j1.data.direction.x!=0 & j2.data.direction.y!=0)
    // cambio la ruta a action2 para que routes=>actionCtrl.action2 que le entra como parametros x, y
    /*
    var auxiliar=$(this).data.direction.y;
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: base + '/action2',
      data: { move: auxiliar },
    })
    .done(function(data) {
      console.log("success");
      console.log(data);
      alert(data.result);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
    */

  });
})();

//1. If the document is ready we show and alert
//2. We see if .moveButton (Objets de tell dataType) receive and action (click)
// that changes the url (calling again routes=> execute actionCtrl.postAction)
