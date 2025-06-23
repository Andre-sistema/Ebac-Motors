$(document).ready(function() {
    // Inicializa o carrossel de imagens com Slick
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    // Controla o menu hambúrguer
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    // Máscaras para os campos do formulário
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DD) 00000-0000'
    });
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    // Validação do formulário
    $('form').validate({
        rules: {
            nome: { required: true },
            email: { required: true, email: true },
            telefone: { required: true },
            endereco: { required: true },
            cep: { required: true },
            cpf: { required: true },
            veiculoDeInteresse: { required: false }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira um email válido',
            telefone: 'Por favor, insira o seu telefone',
            endereco: 'Por favor, insira o endereço',
            cep: 'Por favor, insira o CEP',
            cpf: 'Por favor, insira o CPF'
        },
        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.submit();
        },
        invalidHandler: function(evento, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if(camposIncorretos){
                alert(`Por favor, existem ${camposIncorretos} campos incorretos. Preencha todos para prosseguir com a compra!`);
            }
        }
    });

    // Quando clicar no botão "Tenho interesse", preenche o campo do veículo e rola até o formulário
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();
        $('#veiculo-interesse').val(nomeVeiculo);
        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});
