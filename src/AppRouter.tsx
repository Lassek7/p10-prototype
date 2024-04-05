import { Routes, Route } from "react-router-dom"
import PrototypeThree from './prototype/PrototypeThree';
import PrototypeTwo from './prototype/PrototypeTwo';
import PrototypeOne from './prototype/PrototypeOne';
import Exploration from './prototype/Exploration';
import App from './App';

const AppRouter = () => {
  return (
    <div className="AppRouter">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/prototypeOne" element={<PrototypeOne />} />
        <Route path="/prototypeTwo" element={<PrototypeTwo />} />
        <Route path="/prototypeThree" element={<PrototypeThree />} />
        <Route path="/Exploration" element={<Exploration />} />
      </Routes>
    </div>
  );
}

export default AppRouter;