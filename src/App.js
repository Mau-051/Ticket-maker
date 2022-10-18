import { Routes, Route } from "react-router-dom";
import { Main } from "./Components/Main";
import { ShowTicket } from "./Components/ShowTicket";
import { SavedTickets } from "./Components/SavedTickets";
import useStore from "./store.js";

export function App() {
  const globalTickets = useStore((state) => state.globalTickets);
  const globalTicketsTotal = useStore((state) => state.globalTicketsTotal);
  const addGlobalTicket = useStore((state) => state.addGlobalTicket);
  const setGlobalTicketsTotal = useStore(
    (state) => state.setGlobalTicketsTotal
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            globalTickets={globalTickets}
            globalTicketsTotal={globalTicketsTotal}
            addGlobalTicket={addGlobalTicket}
            setGlobalTicketsTotal={setGlobalTicketsTotal}
          />
        }
      />
      <Route
        path="/ticket"
        element={
          <ShowTicket
            globalTickets={globalTickets}
            globalTicketsTotal={globalTicketsTotal}
          />
        }
      />
      <Route
        path="/saved-tickets"
        element={<SavedTickets globalTickets={globalTickets} />}
      />
    </Routes>
  );
}
