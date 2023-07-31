import { useContext, useState } from "react";
import FormContext from "../../contexts/form";

const FormArea = ({name}) =>
{
    const ctx = useContext(FormContext); // Obtengo el formService

    const [val, setVal] = useState(ctx.get(name))

    return (
        <textarea 
            rows={4}
            value={val}
            placeholder={name.toUpperCase()}
            onChange={
                (e) => ctx.set(name, e.target.value)
            }/>
    )
}

export default FormArea;