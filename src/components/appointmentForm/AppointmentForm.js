import React from "react";
import { ContactPicker } from'../contactPicker/ContactPicker';

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
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
    <label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Appointment title"
      />
    </label>
    <br/>
    <ContactPicker contacts={contacts} />
    <br/>
    <label>
      <input
        type="date"
        name="date"
        value={date}
        min={getTodayString()}
        onChange={(e) => setDate(e.target.value)}
        required
        placeholder="Appointment date"
      />
    </label>
    <br/>
    <label>
      <input
        type="time"
        name="time"
        value={title}
        onChange={(e) => setTime(e.target.value)}
        required
        placeholder="Appointment time"
      />
    </label>
    <br/>
    <input type="submit" value='Add Appointment' />

    </form>
  );
};
