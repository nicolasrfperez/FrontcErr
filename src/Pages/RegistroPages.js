


import React,{useState} from "react"
import {Form,Container} from 'react-bootstrap'
import FormGroup from "../Components/Forms/FormGroup"
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading"
import {create} from "../Services/UsuariosServices"
import ValidatePass from "../Components/ValidatePass"
// import {ValidatePass} from "../Components/ValidatePass"

function RegistroPages(props){
   
    const [form,setForm] = useState({name:'',email:'',password:'', passwordComp:''});
    const [loading,setLoading] = useState(false)

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e)=>{

        
       
        setLoading(true)
        console.log(form);
        create(form)
        .then(data=>{
            console.log("Data",data)
        
            setLoading(false)
        },
        error=>{
            console.log("error",error)
            setLoading(false)
        })
        e.preventDefault()
    }
    return(

        <Container>
            <Form onSubmit={handleSubmit}>
                
                <FormGroup label="Nombre" type="text" placeholder="Ingrese su nombre" name="name" value={form.name} change={handleChange}/>
                <FormGroup label="Email" type="email" placeholder="Ingrese su email" name="email" value={form.email} change={handleChange}/>

                <FormGroup label="Contraseña" type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} change={handleChange}/>
                <FormGroup label="Contraseña" type="password" placeholder="Ingrese nuevamente su contraseña" name="passwordComp" value={form.passwordComp} change={handleChange}/>

               
               
                <ButtonWithLoading text="Registrarse" loading={loading}/>
                   
            </Form>
        </Container>
    
    )
    
}
export default RegistroPages