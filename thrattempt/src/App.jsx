import { Header } from "./components/header";
import { Registration } from "./components/login";

function App() {
  return (
    <>
      <div className="h-screen ">
        <Header />
        <div>
          <Registration />
        </div>
      </div>
    </>
  );
}

export default App;
