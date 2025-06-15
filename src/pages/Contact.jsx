import React, { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
import ContactCard from "../components/ContactCard.jsx";

const Contact = () => {
    const { store, actions } = useContext(AppContext);

    useEffect(() => {
        actions.getContacts();
    }, []);

    return (
        <div className="container">
            <Link to="/add">
                <button>Novo Contato</button>
            </Link>

            <h1>Lista de Contactos</h1>

            {Array.isArray(store.contacts) && store.contacts.length > 0 ? (
                store.contacts.map(contact => (
                    <ContactCard key={contact.id} contact={contact} />
                ))
            ) : (
                <p>Nenhum contato encontrado.</p>
            )}
        </div>
    );
};

export default Contact;
