
import './App.css';
import{BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'; 
import Contacts from './components/Contacts';
import NoPage from './components/NoPage';
function App() {
  return (


 <BrowserRouter>
     <Navbar/>
         <Routes>
             <Route path ="/" element = {<About />} /> 
             <Route path ="/textform" element = {<TextForm />}/>
             <Route path ="/contacts" element = {<Contacts />}/>
             <Route path ="*" element = {<NoPage />}/>
          </Routes>
  </BrowserRouter>
  );
}

export default App;
