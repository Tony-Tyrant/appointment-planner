import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({data, addNew, contacts}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add new appointment and clear input data  
    */
    const newAppointment = {
      title: title,
      date: date,
      time: time
    }
    addNew(newAppointment);
    setTitle('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={contacts}
          title={title} setTitle={setTitle}
          date={date} setDate={setDate}
          time={time} setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={data}/>
      </section>
    </div>
  );
};