import { TGuestsProps } from "./types";

const Guests = ({ guests, destroyGuest }: TGuestsProps) => {
  return (
    <div className="Guests">
      {guests.map((guest) => {
        return (
          <section key={guest.id}>
            <h2>{guest.name}</h2>
            <p>{guest.phone}</p>
            <p>{guest.email}</p>
            <button onClick={() => destroyGuest(guest)}>Delete</button>
          </section>
        );
      })}
    </div>
  );
};

export default Guests;
