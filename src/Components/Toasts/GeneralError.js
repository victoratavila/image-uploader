import swal from '@sweetalert/with-react';

const GeneralError = () => {

    swal({
        title: "Erro!",
        text: "Houve um erro durante o envio da imagem, tente novamente mais tarde.",
        icon: "error",
        button: "Fechar",
      });

}


export default GeneralError;