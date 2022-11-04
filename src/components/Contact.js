import React from 'react';

export default function Contact() {
    return(
        <form>
            <label for='f_name'>First Name</label>
            <input id='f_name' type='text' placeholder='Enter your first name' required />
            <label for='l_name'>Last Name</label>
            <input id='l_name' type='text' placeholder='Enter your last name' required />
            <label for='email'>Email</label>
            <input id='email' type='email' placeholder='yourname@email.com' required />
            <label>Message</label>
            <textarea placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
            <input type='checkbox' required/>
            <p>You agree to providing your data to BimbolaA who may contact you.</p>
        </form>
    )
}