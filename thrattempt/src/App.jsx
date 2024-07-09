import { Header } from "./components/header";
import { Registration } from "./components/login";

function App() {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-[#aaa8e1] to-[#f3f3f3]">
        <Header />
        <div>
          <Registration />
        </div>
      </div>
    </>
  );
}

export default App;
