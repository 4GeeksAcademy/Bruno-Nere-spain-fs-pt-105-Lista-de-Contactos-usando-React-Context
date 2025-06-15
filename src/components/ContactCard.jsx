import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const ContactCard = ({ contact }) => {
    const navigate = useNavigate();
    const { actions } = useContext(AppContext);

    const handleDelete = () => {
        if (confirm("¿Estás seguro de eliminar este contacto?")) {
            actions.deleteContact(contact.id);
        }
    };

    return (
        <div className="card mb-3 p-3">
            <h4>{contact.full_name}</h4>
            <p>Email: {contact.email}</p>
            <p>Tel: {contact.phone}</p>
            <p>Dirección: {contact.address}</p>
            <button onClick={() => navigate(`/edit/${contact.id}`)}>✏️</button>
            <button onClick={handleDelete}>🗑️</button>
        </div>
    );
};

export default ContactCard;
