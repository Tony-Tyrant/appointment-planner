import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  checkName
}) => {
  function nameChangeHandle(e) {
    setName(e.target.value);
  }
  function phoneChangeHandle(e) {
    setPhone(e.target.value);
  }
  function emailChangeHandle(e) {
    setEmail(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label>
      <h3 id="warning" hidden={checkName} style={{color: "red"}} >!!The name has been existing!!</h3>        
      <input 
        type="text" 
        placeholder="Please enter the name" 
        id="name"
        value={name}
        pattern="[a-zA-Z]{1,}"
        onChange={nameChangeHandle}
        required
      />
      <br/>
      <br/>
      <label for="phone">Contact number:</label>
      <input 
        type="text" 
        placeholder="Please enter the phone number" 
        id="phone"
        value={phone}
        pattern="\+\d{2,3}.+\d{4}.+\d{4}|\+\d{2,3}.+\d{8}|\d{4}.+\d{4}|\d{8}"
        onChange={phoneChangeHandle}
        required
      />
      <br/>
      <br/>
      <label for="email">E-mail:</label>
      <input 
        type="text" 
        placeholder="Please enter the E-mail address" 
        id="email"
        value={email}
        pattern="[a-zA-Z]{1,}\@[a-zA-Z]{1,}\.[a-zA-Z]{2,}"
        onChange={emailChangeHandle}
        required
      />
      <input 
        id="submit" 
        type="submit" 
        value="Submit" 
        disabled={!checkName}
      />
    </form>
  );
};

