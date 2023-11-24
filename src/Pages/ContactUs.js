
import React, { useState } from "react";
import { ContactUsFunction } from "../Services/CourseService";


const ContactUs = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    const handleSendMessage = async () => {

        try {
            await ContactUsFunction(firstName, lastName, email, subject, message);
            alert("Message sent successfully.")

        } catch (error) {

            alert("Something went wrong. Please try again.");
            console.log("Error sending message:", error);
        }
    }


    return (
        <div>
            <div style={{marginTop:'50px', marginBottom:'50px'}}>
                <h1>Contact Us</h1>
            </div>
            <h2>Send us a message</h2>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            <br></br>
            <br></br>
            <textarea
                type="text"
                style={{ height: '100px' }}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)} />
            <br></br>
            <br></br>
            <button onClick={handleSendMessage}>Send</button>
            <br></br>
            <br></br>
            <div  style={{ marginTop:'50px' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14374.480891453777!2d28.175938168254948!3d-25.750069860776502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956213a2f4f16d%3A0x993da7df3774cd26!2sPretoria%20Central%2C%20Pretoria%2C%200002!5e0!3m2!1sen!2sza!4v1700819168974!5m2!1sen!2sza" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
} 

export default ContactUs;