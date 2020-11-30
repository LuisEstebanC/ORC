import React, {useState, useEffect} from 'react';
import md5 from 'md5';
import Navbar from './Navbar';
import Cookies from 'universal-cookie';
import axios from 'axios';
import './Login.css';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router, 
  Link
} from "react-router-dom";
function Login(props) {

const baseUrl="https://localhost:44316/api/usuarios";
const cookies = new Cookies();

const [form, setForm] = useState({username:"", password:""});

const handleChange=e=>{
 const {name, value} = e.target;
 setForm({
   ...form,
   [name]: value
 });
  }

  let history = useHistory();
  
  const iniciarSesion= async()=>{
 
    await axios.get(baseUrl+`/${form.username}/${md5(form.password)}`)
    .then(response=>{
        
        return response.data;
    }).then(response=>{
      if(response.length>0){
        var respuesta=response[0];
        console.log(respuesta)
        cookies.set('id', respuesta.id, {path: '/'});
        cookies.set('apellido', respuesta.apellido, {path: '/'});
        cookies.set('nombre', respuesta.nombre, {path: '/'});
        cookies.set('correo', respuesta.correo, {path: '/'});
        cookies.set('username', respuesta.username, {path: '/'});
        cookies.set('password', respuesta.password, {path: '/'});
        swal({
          title: "Bienvenido",
          text: respuesta.nombre+" "+respuesta.apellido,
          icon: "success",
          button: "OK!",
        });
  
        history.push('/');
       
      }else{
        alert('El usuario o la contraseña no son correctos');
        console.log(form)
      }
    })  
    .catch(error=>{
      console.log(error);
    });
  }

  useEffect(()=>{
    if(cookies.get('id')){
    history.push('/');
    }
  },[]);

  

    return (
        <div className="containerPrincipal">
          <div className="containerSecundario">
            <div className="header">
              <div className="usercontF">
                <div className="usercont">
                  <img src="./images/user.png" alt=""/>
                </div>
              </div>
            </div>
            <div className="containerLogin">
                <div className="form-group">
                  <label className="Usuario">Usuario: </label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={handleChange}
                    placeholder="Usuario"
                  />
                  <br />
                  <label className="Password">Contraseña: </label>
                  <br />
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={handleChange}
                    placeholder="contraseña"
                  />
                  <br />
                  <a href="" className="registrarlink"><Link className="registrarlinks" to="/Register" >Registrar</Link> </a> 
                  <br/>
                  <button className="btn" onClick={()=>iniciarSesion()}>Iniciar Sesión</button>
                </div>
                
              </div>  
          </div>
        </div>
    );
}

export default Login;