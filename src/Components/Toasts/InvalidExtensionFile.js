import swal from '@sweetalert/with-react';

const InvalidExtensionFile = () => {

    swal({
        title: "Erro!",
        text: "Por favor envie apenas arquivos com extensões jpg e png.",
        icon: "error",
        button: "Fechar",
      });
      
}


export default InvalidExtensionFile;