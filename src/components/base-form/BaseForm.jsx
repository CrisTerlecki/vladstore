import { useState } from "react";
import FormContext from "../../contexts/form";
import FormField from "../form-field/FormField";

const BaseForm = () => 
{
    const [formData, setFormData] = useState({})

    const formService = {
        get: (key) => formData[key],
        
        set: (key, val) => setFormData({...formData, [key]: val})
    }

    const send = () =>
    {
        // 1 - Recibir valor actual
        {console.log('Datos del fomulario: ', formData)}
        // 2 - Hacer validaciones correspondientes
        // 3 - Enviar formulario con un alert
        alert('Enviando formulario...')
    }

    return(
        <FormContext.Provider value={formService}>
            {console.log(formData)}
            <div> 
                <FormField name={'nombre'}/>
                <FormField name={'apellido'}/>
                <button onClick={send}>Enviar</button>
            </div>
        </FormContext.Provider>
    )
}

export default BaseForm;