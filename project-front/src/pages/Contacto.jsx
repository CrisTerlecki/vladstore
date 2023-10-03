import ContactForm from "../components/contacto/ContactForm";
import MainLayout from "../layout/main/MainLayout";

export default function Contacto()
{
    return(
        <MainLayout>
            <div className="card">
                <h3>Por favor, complete el formulario</h3>  
                <ContactForm/>
            </div>
        </MainLayout>
    )
}