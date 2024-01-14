import React, { useState } from "react";
import { TGuestsData, TCreateGuestProp } from "./types";

const CreateGuest = ({ createGuest }: TCreateGuestProp) => {
  const [guest, setGuest] = useState<TGuestsData>({
    id: 0,
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createGuest(guest);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => {
          guest.name = event.target.value;
          setGuest({ ...guest });
        }}
        placeholder="name"
        value={guest.name}
      />
      <input
        onChange={(event) => {
          guest.email = event.target.value;
          setGuest({ ...guest });
        }}
        placeholder="email"
        value={guest.email}
      />
      <input
        onChange={(event) => {
          guest.phone = event.target.value;
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
