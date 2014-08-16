$(
	function(){
		$('#usuario').click(
			function(){

				if( $(this).val() == 'Usuario'){
					$(this).val('');	
				}
			}
		);
		$('#senha').click(
			function(){
				if( $(this).val() == 'Senha'){
					$(this).val('');	
				}
			}
		);
		$('#botao').click(
			function(){
				$('#mensagem').slideUp('fast');

				if($('#usuario').val() == 'renan' || $('#usuario').val() == '123456'){
					$('#mensagem').html('Seja Bem Vindo Renan');
					$('#mensagem').slideDown('fast');
				}else{
					$('#mensagem').html('Usuário Inválido');
					$('#mensagem').slideDown('fast');
				}
			}
		);
		$('#mensagem').click(
			function(){
				$(this).slideUp();
			}
		);
	}
);