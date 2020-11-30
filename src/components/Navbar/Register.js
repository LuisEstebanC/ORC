import React, { useState, useEffect } from 'react';
import md5 from 'md5';

import Cookies from 'universal-cookie';
import axios from 'axios';
import './Register.css';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import UsuariosDataServices from "../../services/UserServices"
import Login from './Login';

    
function Register(){

    const initialAddUserState = {
        id: null,
        nombre:"",
        apellido:"",
        correo:"",
        username:"",
        password:""
    };

    /*const baseUrl="https://localhost:44316/api/usuarios";*/
    const cookies = new Cookies();
    /*const [form, setForm] = useState({nombre:"", apellido:"",correo:"", username:"", password:""});*/

    const [register, setRegister] = useState(initialAddUserState);
    const [submitted, setSubmitted] = useState(false);

    const handleChange=e=>{
        const {name, value} = e.target;
        setRegister({
          ...register,
          [name]: value
        });
         }
         let history = useHistory();
         useEffect(()=>{
            if(cookies.get('id')){
            history.push('/LoginPage');
            }
          },[]);

    const saveRegister = () =>{
        var data = {
            nombre: register.nombre,
            apellido: register.apellido,
            correo: register.correo,
            username: register.username,
            password: md5(register.password)
        };

        UsuariosDataServices.create(data )
        .then(response => {
            setRegister({
              id: response.data.id,
              nombre: response.data.nombre,
              apellido: response.data.apellido,
              correo: response.data.correo,
              username: response.data.username,
              password: response.data.password
            });
            setSubmitted(true);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    const newRegister =()=>{
        setRegister(initialAddUserState);
        setSubmitted(false);
    }

    return(
        <div className="containerPrincipalR">
            {submitted ?(
                <div>
                    
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newRegister}>
                    Add
                    </button>
              </div>
            ) : (

          <div className="containerSecundarioR">
            <div className="headerR">
              <div className="usercontFR">
                <div className="usercontR">
                  <img src="./images/user.png" alt=""/>
                </div>
              </div>
            </div>
            <div className="containerRegister">
                <div className="form-group">
                    <div className="firstLine">
                        <div className="nombrecont">
                            <label className="nombre">Nombre: </label>
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                name="nombre"
                                value={register.nombre}
                                onChange={handleChange}
                                placeholder="Nombre"
                            />
                            <br />
                        </div>
                        <div className="apellidocont">
                        <label className="apellido">Apellido: </label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            name="apellido"
                            value={register.apellido}
                            onChange={handleChange}
                            placeholder="Apellido"
                        />
                        <br />
                        </div> 
                    </div>
                
                  
                    <div className ="secondLine" >
                        <div className="usuariocont">
                            <label className="Usuario">Usuario: </label>
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={register.username}
                                onChange={handleChange}
                                placeholder="Usuario"
                            />
                            <br />
                        </div>
                        <div className="passwordcount">
                            <label className="Password">Contraseña: </label>
                            <br />
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={register.password}
                                onChange={handleChange}
                                placeholder="contraseña"
                            />
                            <br />
                        </div>
                    </div>
                    <div className ="thirdLine">
                        <div className="correocont">
                            <label className="correo">Correo: </label>
                            <br />
                            <input
                                type="correo"
                                className="form-control"
                                name="correo"
                                value={register.correo}
                                onChange={handleChange}
                                placeholder="Correo"
                            />
                            <br />
                        </div>
                    </div>
                  <button className="btn" onClick={saveRegister}>Registrar</button>
                </div>
              </div>  
          </div>
          ) }
        </div>
    )
}

export default Register;