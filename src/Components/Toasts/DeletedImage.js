import swal from '@sweetalert/with-react';

const DeletedImage = () => {

    swal({
        title: "Sucesso!",
        text: "Imagem apagada com sucesso!",
        icon: "success",
        button: "Fechar",
      });

}


export default DeletedImage;