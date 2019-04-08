/** var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if (!filter.test(form.email.value)) {
    form.email.focus();
    $("MsgErro").show()
    .text('Por favor, informe um email válido.');
    return false;
} */

$(document).ready(function(){
    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.phone_us').mask('(000) 000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
    $('.money').mask('000.000.000.000.000,00', {reverse: true});
    $('.money2').mask("#.##0,00", {reverse: true});
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
        translation: {
        'Z': {
            pattern: /[0-9]/, optional: true
        }
        }
    });
    $('.ip_address').mask('099.099.099.099');
    $('.percent').mask('##0,00%', {reverse: true});
    $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
    $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
    $('.fallback').mask("00r00r0000", {
        translation: {
            'r': {
            pattern: /[\/]/,
            fallback: '/'
            },
            placeholder: "__/__/____"
        }
        });
    $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});


    var maskBehavior = function (val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        options = {onKeyPress: function(val, e, field, options) {
                field.mask(maskBehavior.apply({}, arguments), options);
            }
        };
      
        $('._phone').mask(maskBehavior, options);

        $(document).ready(function(){
        $("#form1").submit(function(){
            var email = $("._js_email").val();
            if(email != "")
            {
                var filtro = /^([w-]+(?:.[w-]+)*)@((?:[w-]+.)*w[w-]{0,66}).([a-z]{2,6}(?:.[a-z]{2})?)$/i;
                if(filtro.test(email))
                {
                    alert("Este endereço de email é válido!");
                    $("._js_email").show().removeClass("erro").addClass("ok")
                    return true;
                } else {
                    alert("Este endereço de email não é válido!");
                    $("._js_email").show().removeClass("ok").addClass("erro")
                    return false;
                }
            } else {
                alert('Digite um email!'); return false;
            }
        });

        $('._js_email').focus(function(){
            $("._js_email").show().removeClass("erro")
        });
     });
});


/*$('._email').mask("A", {
	translation: {
		"A": { pattern: /[\w@\-.+]/, recursive: true }
	}
});*/


$(document).ready(function() {
	$("p").hide();
	$('._js_submit_form').click(function(){
		//desabilitando o submit do form
		$("form").submit(function () { return false; });
		//atribuindo o valor do campo
		var sEmail	= $("._js_email").val();
		// filtros
		var emailFilter=/^.+@.+\..{2,}$/;
		var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/
		// condição
		if(!(emailFilter.test(sEmail))||sEmail.match(illegalChars)){
			$("p").show().removeClass("ok").addClass("erro")
			.text('Por favor, informe um email válido.');
		}else{
			$("p").show().addClass("ok")
			.text('Email informado está correto!');
		}
	});
	$('._js_email').focus(function(){
		$("p.erro").hide();
	});
   });	


   $('.money_example').mask('#.##0,00', { reverse: true });

   //valor sem mascara
   $('.date').cleanVal();

   //remove mascara
   $('.date').unmask();


// way 1
$('.ip_address').mask('099.099.099.099');
// way 2
$('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});




//CEP
var options =  {
    onKeyPress: function(cep, e, field, options) {
      var masks = ['00000-000', '0-00-00-00'];
      var mask = (cep.length>7) ? masks[1] : masks[0];
      $('.crazy_cep').mask(mask, options);
  }};
  
  $('.crazy_cep').mask('00000-000', options);




//ON COMPLETE CEP
  var options =  {
    onComplete: function(cep) {
      alert('CEP Completed!:' + cep);
    },
    onKeyPress: function(cep, event, currentField, options){
      console.log('A key was pressed!:', cep, ' event: ', event,
                  'currentField: ', currentField, ' options: ', options);
    },
    onChange: function(cep){
      console.log('cep changed! ', cep);
    },
    onInvalid: function(val, e, f, invalid, options){
      var error = invalid[0];
      console.log ("Digit: ", error.v, " is invalid for the position: ", error.p, ". We expect something like: ", error.e);
    }
  };
  
  $('.cep_with_callback').mask('00000-000', options);