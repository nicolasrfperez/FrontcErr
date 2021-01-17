import {RegistroPages} from "../Pages/RegistroPages"
import { FormGroup}  from "./Forms/FormGroup"


function ValidatePass(props){

    if (typeof input["password"] !== "undefined" && typeof input["passwordComp"] !== "undefined") {

            

      if (input["password"] != input["passwordComp"]) {

        isValid = false;

        errors["password"] = "Passwords don't match.";

      }

  }
}

export default ValidatePass