import "../styles/Form.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Link as LinkRouter } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export const Form = () => {
    const navigate = useNavigate()
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_anf1hij', 'template_dm6p99n', form.current, 'n9JmVMNtg7ilBxuJR')
            .then((result) => {
                e.target.reset()
                toast("Gracias por tu mensaje 😁")
                navigate("/")
            }, (error) => {
                toast("Algo paso volvé a intentar 😞");
            });
    };

    return (
        <div className="form-container">
             <LinkRouter to="/" className="box-user">
            <i class="fa-solid fa-house-user user"></i>
            </LinkRouter>
            <form ref={form} onSubmit={sendEmail} >
                <label className="label">Nombre</label>
                <input type="text" name="user_name" className="input" />
                <label className="label">Email</label>
                <input type="email" name="user_email" className="input" />
                <label className="label">Mensaje</label>
                <textarea name="message" className="input-textarea" />
                <input type="submit" value="ENVIAR EMAIL" className="form-button" />
            </form>
        </div>

    );
};

export default Form