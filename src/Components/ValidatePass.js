//import {RegistroPages} from "../Pages/RegistroPages"
//import { FormGroup}  from "./Forms/FormGroup"


function ValidatePass(props){
    var pas1 = props.password.value();
    var pas2 = props.passwordComp.value();
  const  estadoPass = (pas1 === pas2);
return(
estadoPass
    );
}

export default ValidatePass