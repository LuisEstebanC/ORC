import React, {useEffect} from 'react';
import Cookies from 'universal-cookie';
import './Menu.css';
import { useHistory } from "react-router-dom";

function Menu(props) {

    const cookies = new Cookies();

    let history = useHistory();

    const cerrarSesion=()=>{
        cookies.remove('id', {path: '/'});
        cookies.remove('apellido', {path: '/'});
        cookies.remove('nombre', {path: '/'});
        cookies.remove('correo', {path: '/'});
        cookies.remove('username', {path: '/'});
        cookies.remove('password', {path: '/'});
        props.history.push('./LoginPage');

    }

    useEffect(()=>{
        if(!cookies.get('id')){
        history.push('/');
        }
      },[]);

    return (
        <div>
            <div className="containerMenu">
                <br/>
                <button onClick={()=>cerrarSesion()}>cerrar Sesion</button>
                <br/>
                <h5>ID: {cookies.get('id')} </h5>
                <br />
                <h5>Apellido: {cookies.get('apellido')} </h5>
                <br />
                <h5>Nombre: {cookies.get('nombre')} </h5>
                <br />
                <h5>Correo: {cookies.get('correo')} </h5>
                <br />
                <h5>Username: {cookies.get('username')} </h5>
                <br />
                <h5>Passwprd: {cookies.get('password')} </h5>
                <br />
            </div>
        </div>
    )
}

export default Menu
