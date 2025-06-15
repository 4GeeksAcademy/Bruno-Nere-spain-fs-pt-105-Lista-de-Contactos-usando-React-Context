export const actions = (store, setStore) => ({
    getContacts: () => {
        fetch("https://playground.4geeks.com/contact/agendas/brunonere")
            .then(res => res.json())
            .then(data => {
                console.log("Contatos recebidos:", data);
                setStore({ contacts: data.contacts });
            })
            .catch(err => console.error("Erro ao obter contatos:", err));
    },

    addContact: (newContact) => {

        console.log("Tentando adicionar:", newContact);

        fetch("https://playground.4geeks.com/contact/agendas/brunonere/contacts", {
            method: "POST",
            body: JSON.stringify(newContact),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (!res.ok) throw new Error("Erro ao adicionar contato");
                return res.json();
            })
            .then(() => {
                actions(store, setStore).getContacts();
            })
            .catch(err => console.error("Erro ao adicionar contato:", err));
    },

    updateContact: (updatedContact, id) => {
        const contactWithAgenda = {
            ...updatedContact,
            agenda_slug: "brunonere"
        };

        fetch(`https://playground.4geeks.com/contact/agendas/brunonere/contacts/${id}`, {
            method: "PUT",
            body: JSON.stringify(contactWithAgenda),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (!res.ok) throw new Error("Erro ao atualizar contato");
                return res.json();
            })
            .then(() => {
                actions(store, setStore).getContacts();
            })
            .catch(err => console.error("Erro ao atualizar contato:", err));
    },

    deleteContact: (id) => {
        fetch(`https://playground.4geeks.com/contact/agendas/brunonere/contacts/${id}`, {
            method: "DELETE"
        })
            .then(res => {
                if (!res.ok) throw new Error("Erro ao excluir contato");
                return res.text();
            })
            .then(() => {
                actions(store, setStore).getContacts();
            })
            .catch(err => console.error("Erro ao excluir contato:", err));
    }
});
