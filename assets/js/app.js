$(document).ready(function(){
  $(function(){
    setTimeout(function() {
        $('.splash').fadeOut('3000');
    }, 500); //velocity in ms (3500)
  });
  $('#signUp').click(function(){
    $('#first').hide();
    $('#signUpSection').show();
  });  
  $('#inputPhone').keydown(function(){  
    if ($('#inputPhone').val().length = 8) {
      $('#nextNumber').attr("disabled", true);
    }
    if ($('#inputPhone').val().length > 8){
      $('#nextNumber').removeAttr("disabled");
    }
  });
});
