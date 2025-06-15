import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { useNavigate, useParams } from "react-router-dom";

const AddContact = () => {
    const { store, actions } = useContext(AppContext);
    const [contact, setContact] = useState({
        name: "",
        email: "",
        address: "",
        phone: ""
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const existing = store.contacts.find(c => c.id === parseInt(id));
            if (existing) setContact(existing);
        }
    }, [id, store.contacts]);

    const handleChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (id) {
            actions.updateContact(contact, id);
        } else {
            actions.addContact(contact);
        }
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">{id ? "Editar contato" : "Adicionar contato"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nome completo</label>
                    <input
                        type="text"
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Digite o nome completo"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Digite o email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefone</label>
                    <input
                        type="text"
                        name="phone"
                        value={contact.phone}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Digite o telefone"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Endereço</label>
                    <input
                        type="text"
                        name="address"
                        value={contact.address}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Digite o endereço"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Salvar</button>
            </form>
        </div>
    );
};

export default AddContact;
