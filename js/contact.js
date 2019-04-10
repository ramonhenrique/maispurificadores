$(document).ready(function () {
    $("#contatoForm").submit(function (event) {
        event.preventDefault();
        var nome = document.querySelector("input[name='nome']");
        var telefone = document.querySelector("input[name='telefone']");
        var assunto = document.querySelector("input[name='assunto']");
        var email = document.querySelector("input[name='email']");
        var mensagem = document.querySelector("textarea[name='message']");
        $.post(location.origin + '/contact', {
            nome: nome.value,
            telefone: telefone.value,
            assunto: assunto.value,
            email: email.value,
            mensagem: mensagem.value
        }).done(function (res) {
            if (res !== 'Ok')
                return toastr.error("Ops, houve algum problema, tente novamente mais tarde!", "Contanto");
            toastr.info("Mensagem envidada com sucesso!", "Contanto");
            nome.value = "";
            telefone.value = "";
            assunto.value = "";
            email.value = "";
            mensagem.value = "";
        });
    });
});
