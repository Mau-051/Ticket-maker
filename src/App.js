import { Routes, Route } from "react-router-dom";
import ShowTicket from "./Components/ShowTicket";
import { Main } from "./Components/Main";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/ticket" element={<ShowTicket />} />
    </Routes>
  );
}
