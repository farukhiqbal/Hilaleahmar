import Header from './component/Header';
import './App.css';
import { Routes,Route} from 'react-router-dom'
import Home from './component/Aboutus/Home';
import Chairmanpage from  './component/Aboutus/Chairmanpage'
import Footer from './component/Layout/Footer';
import Admissionhome from './component/admission/Admissionhome';
import MeritList from './component/admission/MeritList';
import FeeStructure from './component/admission/FeeStructure';
import AdmissionOffice from './component/admission/AdmissionOffice';
import TestDates from './component/admission/TestDates';
import Rulesandpolicy from './component/admission/Rulesandpolicy';
import AdmissionGuide from './component/admission/AdmissionGuide';
import Nursing from './component/Faculty/Nursing';
import Visiting from './component/Faculty/Visiting';
import AdminStaff from './component/Faculty/AdminStaff';
import CnaProgram from './component/program/CnaProgram';
import CmwProgram from './component/program/CmwProgram';
import LhvProgram from './component/program/LhvProgram';
import NewsandEvents from './component/Newsandevents/NewsandEvents';
import AnnualReport from './component/Newsandevents/AnnualReport';
import NoticeBoard from './component/Newsandevents/NoticeBoard';
import MissionandVision from './component/Aboutus/MissionandVision';
import SchoolInfrasture from './component/Aboutus/SchoolInfrasture';
import Contactus from './component/contactus/Contactus';
import Register from './component/Auth/Register';
import Login from './component/Auth/Login';


function App() {
  return (
   
    
          <>
    

               <Header/>

            <Routes>
            {/* <Route path='/' element={<Home/>}/> */}
              <Route path='/home' element={<Home/>}/>
              <Route path='/chairman' element={<Chairmanpage/>}/>
              <Route path='/meritlist' element={<MeritList/>}/>
              <Route path='/feestructure' element={<FeeStructure/>}/>
              <Route path='/admissionoffice' element={<AdmissionOffice/>}/>
              <Route path='/testdate' element={<TestDates/>}/>
              <Route path='/ruleandpolicy' element={<Rulesandpolicy/>}/>
              <Route path='/guide' element={<AdmissionGuide/>}/>
              <Route path='//schoolinfrasture' element={<SchoolInfrasture/>}/>
            
              <Route path='/admissionhome' element={<Admissionhome/>}/>


             
              <Route path='/nursing' element={<Nursing/>}/>
      
              <Route path='/visiting' element={<Visiting/>}/>
              <Route path='/admin' element={<AdminStaff/>}/>

            
              <Route path='/cnaprogram' element={<CnaProgram/>}/>
              <Route path='/cmwprogram' element={<CmwProgram/>}/>
              <Route path='/lhvprogram' element={<LhvProgram/>}/>


              <Route path='/news' element={<NewsandEvents/>}/>
              <Route path='/annualreport' element={<AnnualReport/>}/>
              <Route path='/noticeboard' element={<NoticeBoard/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>


              <Route path='/mission&vision' element={<MissionandVision/>}/>
              <Route path='/contact' element={<Contactus/>}/>


            </Routes>
          
          
    


           
      

      <Footer/>

          </>
 
  );
}

export default App;
