import React, { useId } from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from 'yup';
import { nanoid } from "nanoid";

const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
});



const ContactForm = ({addContact}) => {

    const handleSubmit = (values, actions) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };
        addContact(newContact);
        actions.resetForm();
    };

        const nameFieldId = useId();
        const numberFieldId = useId();
    
    
    
    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit} 
        >
            <Form>
                <label htmlFor={nameFieldId}>Name</label>
                <Field 
                type="text" 
                name="name" 
                id={nameFieldId}/>
                <ErrorMessage name="name" component="div"/>

                <label htmlFor={numberFieldId}>Number</label>
                <Field 
                type="phone" 
                name="number" 
                id={numberFieldId} />
                <ErrorMessage name="number" component="div" />
                
                <button type="submit">Add Contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;