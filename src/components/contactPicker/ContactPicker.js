import React from "react";

export const ContactPicker = ({ contacts, onChange, name }) => {
  return (
    <select name={name} onChange={onChange}>
      <option value={""} key={-1} selected="selected" >
        No contact selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
