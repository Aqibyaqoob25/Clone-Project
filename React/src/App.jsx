import Index from "./Pages/index/index";
import Layout from "./Pages/layout/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<Index />}></Route>
          <Route path="layout" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
