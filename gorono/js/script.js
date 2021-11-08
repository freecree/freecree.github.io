var strGET = window.location.search;
if (strGET == '?modal') {
    $(document).ready(function(){
      $('#request2').modal('show');
  });
}
$('[name = "phone"]').inputmask();
function patern1 () {	
	$('[name = "phone"]').attr('data-inputmask', "'mask': '+7 9999999999'");
	$('[name = "phone"]').attr('pattern', "\\+7\\s[0-9]{10}");
	
}
$(document).ready(function() {
	if ($(window).width() <= '768'){
		patern1()
		$('[name = "phone"]').inputmask();
	}
  

});

(function($){
	$('form').submit(function(e){
		e.preventDefault();
		var formSerialize = $(this).serialize();
		$.ajax({
			url: '/mail.php',
			type: 'post',
			data: formSerialize,
			success: function(){ 
			//	$(".modal").modal("hide");
				$('form input').each(function(){
					$(this).val('');
				});
				$("#success-form").modal('show');
				setTimeout(function(){
					$(".modal").modal("hide");
				}, 2000);
			}
		});
	});	
})(jQuery);
