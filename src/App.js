import { Routes, Route } from "react-router-dom";
import { Main } from "./Components/Main";
import { ShowTicket } from "./Components/ShowTicket";
import { SavedTickets } from "./Components/SavedTickets";
import useStore from "./store.js";

export function App() {
  const globalTicket = useStore((state) => state.globalTicket);
  const globalTicketsTotal = useStore((state) => state.globalTicketsTotal);
  const savedTickets = useStore((state) => state.savedTickets);
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
            globalTicket={globalTicket}
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
            globalTicket={globalTicket}
            globalTicketsTotal={globalTicketsTotal}
          />
        }
      />
      <Route
        path="/saved-tickets"
        element={<SavedTickets savedTickets={savedTickets} />}
      />
    </Routes>
  );
}
