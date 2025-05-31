import React from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ContactUsPage from './pages/ContactUsPage'
import CsrPage from './pages/CsrPage'
import LoginPage from './pages/LoginPage'
import AboutUsPage from './pages/AboutUsPage'
import BenefitsOfCow from './pages/BenefitsOfCow'
import OurActivities from './pages/OurActivities'
import DownloadPage from './pages/DownloadPage'
import GalleryPage from './pages/GalleryPage'
import FaqPage from './pages/FaqPage'
import NewsLetter from './pages/NewsLetter'
import GodaanPage from './pages/GodaanPage'
import AdoptCowPage from './pages/AdoptCowPage'
import GauGrass from './pages/GauGrass'
import MedicalHelp from './pages/MedicalHelp'
import FoodDistribution from './pages/FoodDistribution'
import ShradhaPage from './pages/ShradhPage'
import ShradhPage from './pages/ShradhPage'
import VedicCelebration from './pages/VedicCelebration'
import EventPage from './pages/EventPage'
import NewsUpdate from './pages/NewsUpdate'
import BlogPage from './pages/BlogPage'
import VolunteerExperience from './pages/VolunteerExperience'
import GoverdhanPuja from './pages/GoverdhanPuja'
import TopDesiCowBread from './pages/TopDesiCowBread'
import FoodDistributionTwo from './pages/FoodDistributionTwo'


const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact-us' element={<ContactUsPage/>} />
        <Route path='/csr' element={<CsrPage/>} />
        <Route path='/login' element= {<LoginPage/>}/>
        <Route path='/about-us' element={<AboutUsPage/>}/>
        <Route path='/benefits-of-cow' element={<BenefitsOfCow/>}/>
        <Route path='/our-activities' element= {<OurActivities/>}/>
        <Route path='/download-us' element={<DownloadPage/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
        <Route path='/faq' element={<FaqPage/>}/>
        <Route path='/news-letter' element={<NewsLetter/>}/>
        <Route path='/godaan' element={<GodaanPage/>}/>
        <Route path='/adopt-cow' element={<AdoptCowPage/>}/>
        <Route path='/gaugrass' element={<GauGrass/>}/>
        <Route path='/medical-help' element={<MedicalHelp/>}/>
        <Route path='/food-distribution' element={<FoodDistribution/>}/>
        <Route path='/shradh' element={<ShradhPage/>}/>
        <Route path='/vedic-cel' element={<VedicCelebration/>}/>
        <Route path='/event' element={<EventPage/>}/>
        <Route path='/news-update' element={<NewsUpdate/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/volunteer-experience' element={<VolunteerExperience/>}/>
        <Route path='/govardhan-puja' element={<GoverdhanPuja/>}/>
        <Route path='/top-desi-cow-bread' element={<TopDesiCowBread/>}/>
        <Route path='/food-distribution-2' element={<FoodDistributionTwo/>}/>
       </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
