import { Routes, Route } from "react-router-dom";
import { Main } from "./Components/Main";
import { ShowTicket } from "./Components/ShowTicket";
import { SavedTickets } from "./Components/SavedTickets";
import useStore from "./store.js";

export function App() {
  const globalTickets = useStore((state) => state.globalTickets);
  const addGlobalTicket = useStore((state) => state.addGlobalTicket);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            globalTickets={globalTickets}
            addGlobalTicket={addGlobalTicket}
          />
        }
      />
      <Route
        path="/ticket"
        element={<ShowTicket globalTickets={globalTickets} />}
      />
      <Route
        path="/saved-tickets"
        element={<SavedTickets globalTickets={globalTickets} />}
      />
    </Routes>
  );
}
