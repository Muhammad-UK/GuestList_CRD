import { TGuestsDataArray } from "./types";

const Guests = ({ guests }: TGuestsDataArray) => {
  return (
    <div className="Guests">
      {guests.map((guest) => {
        return (
          <section key={guest.id}>
            <h2>{guest.name}</h2>
            <p>{guest.phone}</p>
            <p>{guest.email}</p>
          </section>
        );
      })}
    </div>
  );
};

export default Guests;
