import { Header } from "./components/header";
import { Registration } from "./components/login";

function App() {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-[#b7b5ff] to-[#deddf9]">
        <Header />
        <div>
          <Registration />
        </div>
      </div>
    </>
  );
}

export default App;
