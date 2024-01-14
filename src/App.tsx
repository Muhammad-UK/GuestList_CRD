import { useEffect, useState } from "react";
import { TGuestsData } from "./types";
import Guests from "./Guests";
import CreateGuest from "./CreateGuest";
import "./App.css";

const App = () => {
  const [guests, setGuests] = useState<TGuestsData[]>([]);

  const COHORT = "2309-AM";
  const Api = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/";
  useEffect(() => {
    const fetchGuestsData = async () => {
      try {
        const response = await fetch(Api + COHORT + "/guests");
        const json = await response.json();
        setGuests(json.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGuestsData();
  }, []);

  const createGuest = async (guest: TGuestsData) => {
    const response = await fetch(Api + COHORT + "/guests", {
      method: "POST",
      body: JSON.stringify(guest),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setGuests([...guests, json.data]);
  };

  return (
    <div>
      <h1>Guests: {guests.length}</h1>
      <CreateGuest createGuest={createGuest} />
      <Guests guests={guests} />
    </div>
  );
};

export default App;
