import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MemberInfo } from './components';
import InfoPage from './components/InfoPage/InfoPage';
import UpLoadEvent from './components/UpLoadEvent/UpLoadEvent';
import { Home, Members, Product, Events, Contact, AppLayout, NoFooterLayOut } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NoFooterLayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/members/:id" element={<MemberInfo />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="/members" element={<Members />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<InfoPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<InfoPage />} />
          <Route path="/events/add" element={<UpLoadEvent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
