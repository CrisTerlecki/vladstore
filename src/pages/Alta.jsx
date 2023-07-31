import AltaForm from "../components/alta-form/AltaForm";
import MainLayout from "../layout/main/MainLayout";

export default function Alta()
{
    return(
        <MainLayout>
            <div className="card">
                <h3>Alta de producto</h3>
                <AltaForm/>
            </div>
        </MainLayout>
    )
}