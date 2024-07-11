import { Header } from "./components/header";
import { Registration } from "./components/login";

function App() {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-[#0bb5ff] to-[#b3fffd]">
        <Header />
        <div>
          <Registration />
        </div>
      </div>
    </>
  );
}

export default App;
