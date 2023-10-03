import {useState} from 'react'

const ContactForm = () => 
{
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        comentario: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (e) => 
    {
        e.preventDefault()
        if (!formData.nombre || !formData.email || !formData.comentario) {
            alert('Todos los campos son obligatorios.')
            return
        } else {
            alert('Formulario Enviado Correctamente')
        }

        try {
            await fetch('http://localhost:5000/contacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
        })
        } catch (error) {
            console.error('Error al conectar con el servidor:', error)            
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="card__form">
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    placeholder='Nombre'
                    value={formData.nombre}
                    onChange={handleChange}
                />
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <label>Comentario:</label>
                <textarea
                    rows={4}
                    type="text"
                    name="comentario"
                    placeholder='Comentario'
                    value={formData.comentario}
                    onChange={handleChange}
                />
                <button type="submit">Enviar</button> 
            </div>            
        </form>
    )
}

export default ContactForm;