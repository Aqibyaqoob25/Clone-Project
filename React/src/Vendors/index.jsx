import Friends from "./Friends";
import Home from "./Home";
import MessagesSection from "./Messages";

function Index({ option }) {
  return (
    <div className="flex flex-col lg:flex-row lg:w-4/5 h-full p-4 mx-auto items-center">
      {option === "Home" && <Home />}
      {option === "Friends" && <Friends />}
      {option === "Messages" && <MessagesSection />}
    </div>
  );
}

export default Index;
