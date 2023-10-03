import { useState } from "react";
import FormContext from "../../contexts/form";
import FormField from "../form-field/FormField";
import FormArea from "../form-area/FormArea";

const ContactForm = () => 
{
    const [formData, setFormData] = useState({})

    const formService = {
        get: (key) => formData[key],
        
        set: (key, val) => setFormData({...formData, [key]: val})
    }

    const send = () =>
    {
        alert('Enviando formulario...')
    }

    return(
        <FormContext.Provider value={formService}>
            {console.log(formData)}
            <div className="card__form"> 
                <label>Nombre:</label>
                <FormField name={'nombre'}/> 
                <label>e-mail:</label>             
                <FormField name={'e-mail'}/>
                <label>Comentarios:</label>
                <FormArea name={'comentarios'}/>
                <button onClick={send}>Enviar</button>
            </div>
        </FormContext.Provider>
    )
}

export default ContactForm;