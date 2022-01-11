$(document).ready(function(){
    $('.quote-step2,.quote-step3,.quote-step4,.quote-step5,.quote-step6, .quote-step7,.quote-step8,.quote-step9,.quote-step10').hide();
    
    var name_regex = new RegExp("^[a-zA-Z ]+$");
    var email_regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var phone_regex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm;

		//Step 1
  	$('.btn-next').click(function(){
      $( ".form__input-field.company" ).keypress(function() {$('.error-code').addClass('hide');});
      $( ".form__input-field.company" ).focus(function() {$('.error-code').addClass('hide');});
      if($(".form__input-field.company").val().length == 0){$('.error-code').removeClass('hide');}
      else{$('.quote-step1').hide();$('.quote-step2').show();}
    });
    
    //Step 2
    $('.btn-next2').click(function(){
      $( ".form__input-field-label.const-value" ).keypress(function() {$('.error-code').addClass('hide');});
      $( ".form__input-field-label.const-value" ).focus(function() {$('.error-code').addClass('hide');});
      if($("#val8810").val().length == 0 && $("#val35601").val().length == 0 && $("#val35602").val().length == 0){
      	$('.error-code').removeClass('hide');
      }
      else{
      $('.btn-next2').removeClass('.btn-disable');
      $('.quote-step2').hide();
      $('.quote-step3').show();
      }
    });
    
    $('.s2-input1, .s2-input2, .s2-input3').on('input', function() {
    	if($(".s2-input1").val().length != 0 || $(".s2-input2").val().length != 0  || $(".s2-input3").val().length != 0){
      	$('.error-code').addClass('hide');
        $('.btn-next2').removeClass('btn-disable');
      }else{
      	$('.btn-next2').addClass('btn-disable');
      }
    });
    
    $('.hourly-rate1, .hourly-rate2').on('input', function() {
    	
      if(($(".hourly-rate1").val() < 8) && ($(".hourly-rate1").val() != "")){
      		$('.rate-indicator-arrow1').addClass('red-arrow');
          $('.rate-indicator-arrow1').removeClass('green-arrow');
      }else{
      		$('.rate-indicator-arrow1').addClass('green-arrow');
          $('.rate-indicator-arrow1').removeClass('red-arrow');
      }
      
      if(($(".hourly-rate2").val() < 8) && ($(".hourly-rate2").val() != "")){
      		$('.rate-indicator-arrow2').addClass('red-arrow');
          $('.rate-indicator-arrow2').removeClass('green-arrow');
      }else{
      		$('.rate-indicator-arrow2').addClass('green-arrow');
          $('.rate-indicator-arrow2').removeClass('red-arrow');
      }
      
      if($(".hourly-rate1").val() == ""){
      	$('.rate-indicator-arrow1').removeClass('green-arrow');
        $('.rate-indicator-arrow1').removeClass('red-arrow');
      }
      
      if($(".hourly-rate2").val() == ""){
      	$('.rate-indicator-arrow2').removeClass('green-arrow');
        $('.rate-indicator-arrow2').removeClass('red-arrow');
      }
      
      if($(".hourly-rate1").val().length != 0 && $(".hourly-rate2").val().length != 0){
      	$('.error-code').addClass('hide');
        $('.btn-next3').removeClass('btn-disable');
      }else{
      	$('.btn-next3').addClass('btn-disable');
      }
    });
     
    //Step 3
    $('.btn-next3').click(function(){
      $( ".hourly-rate1, .hourly-rate2" ).keypress(function() {$('.error-code').addClass('hide');});
      $( ".hourly-rate1, .hourly-rate2" ).focus(function() {$('.error-code').addClass('hide');});
      
      if($(".hourly-rate1").val().length == 0 && $(".hourly-rate2").val().length == 0){
      	$('.error-code').removeClass('hide');
      }
      else{
        $('.btn-next2').removeClass('.btn-disable');
          $('.quote-step3').hide();
          $('.quote-step4').show();
        }
    });
   

    //Step 4 Modified
    $('.form__select-field._1').on('change', function () {
      if(($(this).find('option').filter(':selected').text() != "Select one...")
	$$ ($('.form__select-field._2').find('option').filter(':selected').text() != "Select one...")){
      	$('.error-code').addClass('hide');
        $('.btn-next4').removeClass('btn-disable');
      }else{
      	$('.error-code').removeClass('hide');
        $('.btn-next4').addClass('btn-disable');
      }
    });
    
    $('.form__select-field._2').on('change', function () {
      if(($(this).find('option').filter(':selected').text() != "Select one...")
	&& ($('.form__select-field._1').find('option').filter(':selected').text() != "Select one...")){
      	$('.error-code').addClass('hide');
        $('.btn-next4').removeClass('btn-disable');
      }else{
      	$('.error-code').removeClass('hide');
      	$('.btn-next4').addClass('btn-disable');
      }
    });
    
    $('.btn-next4').click(function(){
    	$('.quote-step4').hide();
      $('.quote-step5').show();
    });
    
    
    //Step 5
    
    $('.overtime-per-week').on('input', function() {
    	if($(".overtime-per-week").val().length != 0){
      	$('.error-code').addClass('hide');
        $('.btn-next5').removeClass('btn-disable');
      }else{
      	$('.btn-next5').addClass('btn-disable');
      }
    });

    $('.btn-next5').click(function(){
    	$('.quote-step5').hide();
      $('.quote-step6').show();
    });
    
    $('.btn-next6').click(function(){
    	$('.quote-step6').hide();
      $('.quote-step7').show();
    });
    
    $('.btn-next7').click(function(){
    	$('.quote-step7').hide();
      $('.quote-step8').show();
    });
    
    $('.btn-next8').click(function(){
    	$('.quote-step8').hide();
      $('.quote-step9').show();
    });
    
    $('.btn-next9').click(function(){
    	$('.quote-step9').hide();
      $('.quote-step10').show();
    });
    
   $('.btn-next10').click(function(){
    	$('.quote-step10').hide();
      $('.quote-step11').show();
    });
    
    //Back button
    $('.btn-back1').click(function(){
    	$('.quote-step2').hide();
      $('.quote-step1').show();
    });
    
    $('.btn-back2').click(function(){
    	$('.quote-step3').hide();
      $('.quote-step2').show();
    });
    
    $('.btn-back3').click(function(){
    	$('.quote-step4').hide();
      $('.quote-step3').show();
    });
    
    $('.btn-back4').click(function(){
    	$('.quote-step5').hide();
      $('.quote-step4').show();
    });
    
    $('.btn-back5').click(function(){
    	$('.quote-step6').hide();
      $('.quote-step5').show();
    });
    
    $('.btn-back6').click(function(){
    	$('.quote-step7').hide();
      $('.quote-step6').show();
    });
    
    $('.btn-back7').click(function(){
    	$('.quote-step8').hide();
      $('.quote-step7').show();
    });
    
    $('.btn-back8').click(function(){
    	$('.quote-step9').hide();
      $('.quote-step8').show();
    });
    
    $('.btn-back9').click(function(){
    	$('.quote-step10').hide();
      $('.quote-step9').show();
    });
    
    $('#cancel-quote').click(function(){
    		resetForm();
    });
    
    //$('.quote-builder-form').submit();
    
    function resetForm(){
    	$('.quote-step2, .quote-step3, .quote-step4, .quote-step5, .quote-step6, .quote-step7, .quote-step8, .quote-step9').hide();
      $('.quote-step1').show();
      
    	$(".form__input-field.company").val("");
      $(".form__input-field-label.const-value").val("");
      $(".form__input-field-label__left").val("");
     	$('.form__select-field').prop('selectedIndex',0);
    }
    
  });
