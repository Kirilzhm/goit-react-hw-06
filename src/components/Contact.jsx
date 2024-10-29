import React from "react";

const Contact = ({ contact, removeContact }) => {
    return (
        <li>
            <span>👤 {contact.name}</span>
            <span>📞 {contact.number}</span>
            <button onClick={() => removeContact(contact.id)}>Delete</button>
        </li>
    );
};  

export default Contact;
