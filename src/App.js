import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import api from './config/api';
import {ReactComponent as Spinner} from './assets/spinner.svg';
import invalidExtensionFile from './Components/Toasts/InvalidExtensionFile';
import GeneralError from './Components/Toasts/GeneralError';

function App() {

  const [imageLink, setImageLink] = useState(null);
  const [loader, setLoader] = useState(false);

  async function submitImage(file){
    const data = new FormData();
    data.append('image', file);

    setLoader(true);
    await api.post('/image', data).then(result => {
      setImageLink(result.data.data.link);
      setLoader(false);
    }).catch(err => {
      console.log(err);
      GeneralError();
    })
  }

	const changeHandler = (event) => {
    const details = event.target.files[0];
    
    if(details.name.slice(-3) === 'jpg' || details.name.slice(-3) === 'png' || details.name.slice(-3) === 'JPG' || details.name.slice(-3) === 'PNG')  {
      submitImage(details);

    } else {

      setImageLink(null);
      invalidExtensionFile();

    }
    
	};

  return (
    <div className="App"> <br/> 

      <div className = "container"> 
        
        <h1 className = "title"> Upload de imagem </h1> <br/> <br/> 
        <div className = "base border"> <br/> <br/> <br/>


        <div className = "formArea border">
          <form>
            
            <input onChange = {changeHandler} type = "file" id = "file" accept = "image/*"></input>
            <label htmlFor = "file"> {loader === true ? <Spinner/> : 'Escolher imagem'} </label>
          </form> 
        </div> 

       {imageLink ? (
				<div>
      <br/> <br/> <br/> 
      <p className = "successMessage">Upload concluído com sucesso! ✨</p>
      <a className = "imageLink" target="_blank" rel="noreferrer noopener" href = {imageLink}>{imageLink}</a>
				
				</div>
			) : (
        <div>
          <br/> <br/> <br/> <br/>
          <h5 className = "noFileSentYet">Nenhum arquivo enviado ainda 😴</h5>
        </div>

			)}
            
        </div>
      </div>
  
    </div>
  );
}

export default App;
