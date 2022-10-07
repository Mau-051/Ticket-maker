import { Main } from "./Components/Main";
import { Routes, Route } from "react-router-dom";
import ShowTicket from "./Components/ShowTicket";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/ticket" element={<ShowTicket />} />
    </Routes>
  );
}
