import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MeditationPage from "./pages/MeditationPage";
import SilentRetreatPage from "./pages/SilentRetreatPage";
import VirtualGardenPage from "./pages/VirtualGardenPage";
import WisdomLibraryPage from "./pages/WisdomLibraryPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import { AudioProvider } from "./contexts/AudioContext";

function App() {
  return (
    <AudioProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="meditation" element={<MeditationPage />} />
          <Route path="silent-retreat" element={<SilentRetreatPage />} />
          <Route path="virtual-garden" element={<VirtualGardenPage />} />
          <Route path="wisdom-library" element={<WisdomLibraryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AudioProvider>
  );
}

export default App;