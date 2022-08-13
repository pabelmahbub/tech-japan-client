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
import Register from './Register/Register';
import HireBlog from "./HireBlog/HireBlog";
import DeveloperBlog from "./DeveloperBlog/DeveloperBlog";

function App(){
  return(

 <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/jobPost" element={<JobPost />} />
      <Route path="/service/:serviceId" element={<ServiceDetail />} />
      <Route path="/hireBlog" element={<HireBlog />} />
      <Route path="/developerBlog" element={<DeveloperBlog />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
        }
export default App;