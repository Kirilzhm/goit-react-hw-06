import React from "react";
import Contact from "./Contact";

const ContactList = ({ contacts, searchQuery, removeContact }) => { 
    const filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <ul>
            {   
                filteredContacts.map(contact => (
                    <Contact key={contact.id} contact={contact} removeContact={removeContact} /> 
                ))
            }   
        </ul>
    );
}; 

export default ContactList;

