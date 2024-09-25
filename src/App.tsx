import { Routes, Route } from "react-router-dom";
// import CredentialSignInPage from './components/SignIn';
import Home from './components/Home';
import { Page2 } from './components/Page2';
import { Page3 } from './components/Page3';
import Auth from "./components/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
    </Routes>
  )
}

export default App