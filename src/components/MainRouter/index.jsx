import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/Home";
import SearchPage from "../../pages/Search";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
