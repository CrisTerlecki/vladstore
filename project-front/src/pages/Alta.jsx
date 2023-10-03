import CardForm from "../components/alta/CardForm";
import MainLayout from "../layout/main/MainLayout";

export default function Alta()
{
    return(
        <MainLayout>
            <div className="card">
                <h3>Alta de producto</h3>
                <CardForm/>
            </div>
        </MainLayout>
    )
}