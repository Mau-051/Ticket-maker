import { Routes, Route } from "react-router-dom";
import { Main } from "./Components/Main";
import { ShowTicket } from "./Components/ShowTicket";
import { SavedTickets } from "./Components/SavedTickets";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/ticket" element={<ShowTicket />} />
      <Route path="/saved-tickets" element={<SavedTickets />} />
    </Routes>
  );
}
