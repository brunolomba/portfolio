// Fecha o menu Hamburguer quando seleciona uma opção.
$(".nav-link").on("click", function(){
    $('.navbar-collapse').collapse('hide');
});

// function enviar_mensagem_whatsapp(nome, email, telefone, mensagem) {
//     let mensagem_de_texto = `${nome}\n${email}\n${telefone}\n${mensagem}`
//     console.log(mensagem_de_texto)
// }

// console.log(enviar_mensagem_whatsapp('bruno', 'bruno@gmail.com', '11 9 5219-3890', 'oi'))

// form.addEventListener('submit', function (e) {

//     // Evitar atualização da página, porque os dados estão sendo enviados por AJAX.
//     e.preventDefault()

//     // jQuery para pegar os valores dos inputs hidden.
//     let nome = $('#nome').val(input.value)
//     let email = $('#email').val(input.value)
//     let telefone = $('#telefone').val(input.value)
//     let mensagem = $('#mensagem').val(input.value)

//     $.ajax({
//         url: `.https://api.whatsapp.com/send?phone=5511952193890&text=${nome}\n${email}\n${telefone}\n${mensagem}`,
//         type: 'POST'
//     })

//     input.value = null
// })