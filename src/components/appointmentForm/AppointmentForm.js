import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  function titleChangeHandle(e) {
    setTitle(e.target.value);
  }
  function dateChangeHandle(e) {
    setDate(e.target.value);
  }
  function timeChangeHandle(e) {
    setTime(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="contactInfo">Search Title:</label>
      <input 
        list="contacts" 
        name="contact" 
        id="contact" 
        value={title}
        onChange={titleChangeHandle}
        placeholder="Type or select the contact person"
        required
      />
        <datalist id="contacts">
          {contacts.map(contact => {
            return(
              <option value={contact.name} />
            )
          })}
        </datalist>
      
      <ContactPicker title={title} contacts={contacts} />
      <input 
        type="date" 
        min={getTodayString()} 
        value={date} 
        onChange={dateChangeHandle}
        required
      />
      <input 
        type="time" 
        min="09:00" 
        max="22:00" 
        value={time}
        onChange={timeChangeHandle}
        required
      />
      <input 
        id="submit"
        type="submit" 
        value="Confirm" 
      />
    </form>
    
  ) 

};
