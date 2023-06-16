import React from "react";

export const ContactPicker = ({contacts, title}) => {
  if(contacts.find(contact => contact.name === title)){
    const info = contacts.find(contact => contact.name === title)
    const {name, ...rest} = info; 
    const description = rest;
  
    return(
      <div>
        {Object.values(description).map(item => {
          return (
            <p>{item}</p>
          );
        })}
      </div>
    );
  }

};
