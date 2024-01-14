import React, { useState } from "react";
import { TGuest, TCreateGuestProp } from "./types";

const CreateGuest = ({ createGuest }: TCreateGuestProp) => {
  const [guest, setGuest] = useState<TGuest>({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (guest) createGuest(guest);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => {
          if (event.target.value) guest.name = event.target.value;
          setGuest({ ...guest });
        }}
        placeholder="name"
        value={guest.name}
      />
      <input
        onChange={(event) => {
          if (event.target.value) guest.email = event.target.value;
          setGuest({ ...guest });
        }}
        placeholder="email"
        value={guest.email}
      />
      <input
        onChange={(event) => {
          if (event.target.value) guest.phone = event.target.value;
          setGuest({ ...guest });
        }}
        placeholder="phone"
        value={guest.phone}
      />
      <button>Create Guest</button>
    </form>
  );
};
export default CreateGuest;
