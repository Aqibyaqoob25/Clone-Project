import { createContext, useState } from "react";
import Index from "./Pages/index/index";
import Layout from "./Pages/layout/layout";
import NotFound from "./not-found";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./middleware";
export const LoginContext = createContext([]);
function App() {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") == undefined
      ? false
      : localStorage.getItem("isLogin")
  );
  return (
    <>
      <LoginContext.Provider value={[isLogin, setIsLogin]}>
        <BrowserRouter>
          <Routes path="/">
            <Route path="">
              <Route index element={<Index />}></Route>
            </Route>
            <Route
              path="layout"
              element={
                <ProtectedRoutes>
                  <Layout />
                </ProtectedRoutes>
              }
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </>
  );
}

export default App;
