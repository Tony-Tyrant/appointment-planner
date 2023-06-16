import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({data, addNew}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [checkName, setCheckName] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    const newContact = {
      name: name,
      phone: phone,
      email: email
    }
    addNew(newContact);
    setName('');
    setPhone('');
    setEmail('');
  };

  useEffect(()=>{
    if(data.every(contact => contact.name !== name)) {
      setCheckName(true);
    } else {setCheckName(false);}
    }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name} setName={setName} 
          phone={phone} setPhone={setPhone}
          email={email} setEmail={setEmail}
          checkName={checkName}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={data}/>
      </section>
    </div>
  );
};
