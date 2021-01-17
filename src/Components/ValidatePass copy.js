//import {RegistroPages} from "../Pages/RegistroPages"
//import { FormGroup}  from "./Forms/FormGroup"


function ValidatePass(props){

    if (typeof props.input["password"] !== "undefined" && typeof props.input["passwordComp"] !== "undefined") {

            

      if (props.input["password"] === props.input["passwordComp"]) {

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