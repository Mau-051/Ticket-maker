import { Routes, Route } from "react-router-dom";
import { Main } from "./Components/Main";
import { ShowTicket } from "./Components/ShowTicket";
import { SavedTickets } from "./Components/SavedTickets";
import { NotFound } from "./Components/NotFound";
import useStore from "./store.js";

export function App() {
  const globalTicket = useStore((state) => state.globalTicket);
  const globalTicketsTotal = useStore((state) => state.globalTicketsTotal);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            globalTicket={globalTicket}
            globalTicketsTotal={globalTicketsTotal}
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
      <Route path="/saved-tickets" element={<SavedTickets />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
