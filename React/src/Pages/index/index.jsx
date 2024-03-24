import { useState } from "react";
import Login from "./login";
import Signup from "./signup";

function Index() {
  const [IsLogin, setIsLogin] = useState(true);
  const updateState = (setState) => {
    setIsLogin(setState);
  };
  return (
    <>
      <div className="w-screen h-screen bg-gray-200">
        {IsLogin && <Login setLogin={updateState} />}
        {!IsLogin && <Signup setLogin={updateState} />}
      </div>
    </>
  );
}

export default Index;
