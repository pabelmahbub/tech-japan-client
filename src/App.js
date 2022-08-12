import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too
import Home from '../src/Home/Home';
import ServiceDetail from './ServiceDetail/ServiceDetail';
//import Service from "./Service/Service";
import JobPost from "./JobPost/JobPost";
import Login from './Login/Login';
import NotFound from "./NotFound/NotFound";

function App(){
  return(

    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/jobPost" element={<JobPost />} />
      <Route path="/service/:serviceId" element={<ServiceDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
);
        }
export default App;