//import {RegistroPages} from "../Pages/RegistroPages"
//import { FormGroup}  from "./Forms/FormGroup"


function ValidatePass(props){

    if (props.password.input.value !== "undefined" &&  props.passwordComp.input.value !== "undefined") {

            

      if ( props.password.input.value ===  props.passwordComp.input.value) {

        props.estado = true;

       // errors["password"] = "Passwords don't match.";

      }


  }else props.estado = false
  
  return (
    console.log(props.estado + " estado"),
    props.estado
  );
}

export default ValidatePass