import React from 'react';
import Footer from './Footer';

export default function Contact() {
    return(
        <section id='form'>
            <h2>Contact Me</h2>
            <p id='form-para'>Hi there, contact me to ask me about anything you have in mind.</p>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="first_name" placeholder='Enter your first name' required />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="last_name" placeholder='Enter your last name' required />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="yourname@email.com" required />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Message</label>
                    <textarea class="form-control" id="message" placeholder="Send me a message and I'll reply you as soon as possible..." required></textarea>
                </div>
                
                <div class="col-12">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                    You agree to providing your data to BimbolaA who may contact you.
                    </label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" id='btn__submit'>Sign in</button>
                </div>
            </form>
            <Footer />
        </section>
        
    )
}