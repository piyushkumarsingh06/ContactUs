import Button from "../Button/Button";
import styles from './Contact.module.css';

import { MdMessage } from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";

import { HiMail } from "react-icons/hi";

import {useState} from "react";
const 
ContactForm = () => {
  const [name, setName] = useState("piyush");
  const [email, setEmail] = useState("p262726@gmail.com");
  const [text, setText] = useState("Welcome");

 
 const onSubmit = (event) =>{
  event.preventDefault();

  setName(event.target[0].value);
  setEmail( event.target[1].value);
  setText(event.target[2].value)
  
 }
 
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
            <Button  text = "VIA SUPPORT CHAT" icon = {<MdMessage fontSize="24px"></MdMessage>} ></Button>
            
            <Button
              text = "VIA CALL" icon = {<FaPhoneAlt fontSize="24px"></FaPhoneAlt>} ></Button>
            </div>
            <Button 
             isOutline = {true}
             text = "VIA EMAIL FORM" icon = {<HiMail fontSize="24px"></HiMail>} ></Button>
         

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name = "name" />
          </div>

          <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" name = "email" />
          </div>

          <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
         <textarea name="text" rows="6"></textarea>
          </div>

          <div style={{
            display:"flex",
            justifyContent: "end",
          }}>
          <Button 
             text = "SUBMIT BUTTON" ></Button>
          </div>
          <div>
          {name + " " + email + " " + text}
          </div>
        </form>
        </div>

        <div className={styles.contact_image}>
          <img src="/images/contact.svg" alt="contact image" />
        </div>

    </section>
  )
}

export default ContactForm