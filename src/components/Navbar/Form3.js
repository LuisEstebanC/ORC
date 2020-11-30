import React,{Fragment, useState} from 'react';
import {useForm} from 'react-hook-form';
import Navbar from './Navbar';
import Footer from '../Footer';


const Form3 = () =>{

    const data =[

    ]

    const {register, errors, handleSubmit} = useForm();

    const [entrada, setEntradas] = useState([])

    const onSubmit=(data, e)=>{
        console.log(data)
        setEntradas([
            ...entrada,
            data
        ])
        e.target.reset();
    }

    return(
        
        <Fragment>
            <Navbar></Navbar>
            <h1>Agregar Compra</h1>
            <div>
                <div className="formD">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                        <label>Nombre de Empresa: </label>
                        <input
                            name="nombre"
                            type="text"
                            placeholder="Igrese Nombre"
                            ref={
                                register({
                                    required:{value:true, message:'Campo obligatorio'},
                                    minLength:{value:2, message:'Debe tener al menos dos letras'}  
                                })
                            }
                        />
                        {   
                            errors.nombre &&
                            <span>
                                {errors.nombre.message}
                            </span>
                        }
                        <input
                            name="apellido"
                            type="text"
                            placeholder="Igrese apellido"
                            ref={
                                register({
                                    required:{value:true, message:'Campo obligatorio'},
                                    minLength:{value:2, message:'Debe tener al menos dos letras'}  
                                })
                            }
                            />
                            {   
                            errors.apellido &&
                            <span>
                                {errors.apellido.message}
                            </span>
                        }
                        </div>
                         
                        <button color="primary" type="submit">Guardar</button>
                </form>
                </div>
                <div className="ListaF">
                    <ul>
                        {
                            entrada.map((item, index) =>
                        <li key={index}>{item.nombre}{"   "}{item.apellido}</li>
                            )
                        }
                    </ul>
                </div>     
            </div>
            
            <Footer></Footer>
        </Fragment>
        
        
    )
}

export default Form3;