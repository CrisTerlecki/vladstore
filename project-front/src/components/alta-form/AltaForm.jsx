import { useState } from "react";
import FormContext from "../../contexts/form";
import FormField from "../form-field/FormField";
import FormArea from "../form-area/FormArea";

const AltaForm = () => 
{
    const [formData, setFormData] = useState({})

    const formService = {
        get: (key) => formData[key],
        
        set: (key, val) => setFormData({...formData, [key]: val})
    }

    const send = () =>
    {
        {console.log('Datos del fomulario: ', formData)}
        alert('Enviando formulario...')
    }

    return(
        <FormContext.Provider value={formService}>
            {console.log(formData)}
            <div className="card__form"> 
                <label>Nombre:</label>
                <FormField name={'nombre'}/>
                <label>Precio:</label>              
                <FormField name={'precio'}/>
                <label>Stock:</label>
                <FormField name={'stock'}/>
                <label>Marca:</label>
                <FormField name={'marca'}/>
                <label>Categoria:</label>
                <FormField name={'categoria'}/>
                <label>Descripcion corta:</label>
                <FormField name={'descripcion corta'}/>
                <label>Descripcion larga:</label>
                <FormArea name={'descripcion larga'}/>
                <label>Envio sin cargo?</label>
                <select id="envio">
                    <option value="">Seleccione</option>
                    <option value="no">No</option>
                    <option value="si">Si</option>
                </select>
                <label>Edad desde:</label>
                <FormField name={'edad desde'}/>
                <label>Edad hasta:</label>
                <FormField name={'edad hasta'}/>
                <label for="foto">Subir foto:</label>
                <input type="file" id="foto" name="foto"/>

                <button onClick={send}>Enviar</button>
            </div>
        </FormContext.Provider>
    )
}

export default AltaForm;