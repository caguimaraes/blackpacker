let form = document.getElementById('form');


function validaForm(form) {
           if(form.nome.value == "" || form.nome.value == null || form.nome.value.lenght < 3) {
            alert("Por favor, preencha seu nome.");
            form.nome.focus();
            return false;
        }
           if(form.sobrenome.value == "") {
            alert("Por favor, preencha seu sobrenome.");
            form.sobrenome.focus();
            return false;
        }
            if(form.email.value == "" || form.email.value == null) {
            alert("Por favor, indique um e-mail válido.");
            form.email.focus();
            return false;
        }

           if(form.endereco.value == "") {
            alert("Por favor, preencha seu endereço.");
            form.endereco.focus();
            return false;
        }
            if(form.cep.value == "") {
            alert("Preencha seu cep");
            form.prof.focus();
            return false;
        } else {
            alert("Reserva efetuada com sucesso")
        }
        form.reset()
    }
