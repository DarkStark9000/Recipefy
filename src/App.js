import { BrowserRouter } from "react-router-dom";
import Logo from "./components/Logo";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="holdnav">
        <Logo />
        <Search />
      </div>
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
