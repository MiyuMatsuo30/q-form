import { Routes, Route } from "react-router-dom";
// import CredentialSignInPage from './components/SignIn';
import Home from './components/Home';
import WordDict from './components/WordDict';
import Music from './components/Music';
import Auth from "./components/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/worddict" element={<WordDict />} />
      <Route path="/music" element={<Music />} />
    </Routes>
  )
}

export default App