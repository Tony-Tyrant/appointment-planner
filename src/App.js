import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contactData, setContactData] = useState([
    {name: "Test1", phone: "1111-1111", email:"aa@abc.com"},
    {name: "Test2", phone: "2222-2222", email:"bb@abc.com"},
    {name: "Test3", phone: "3333-3333", email:"cc@abc.com"}
  ]);
  const [appointmentData, setAppointmentData] = useState([]);
  /*
  Implement functions to add data to
  contacts and appointments
  */
  function updateContact (newContact) {
    setContactData((prev) => [...prev, newContact]);
  }

  function updateAppointment (newAppointment) {
    setAppointmentData((prev) => [...prev, newAppointment]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route 
        path={ROUTES.CONTACTS} element={ 
          <ContactsPage 
            data={contactData} 
            addNew={updateContact} 
          /> 
        }
      />
      <Route 
        path={ROUTES.APPOINTMENTS} element={ 
          <AppointmentsPage 
            data={appointmentData} 
            addNew={updateAppointment} 
            contacts={contactData}
          /> 
        }
      />
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
