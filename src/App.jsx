import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services';
import AuthPage from './AuthPage';
import TeamMembers from './TeamMembers';
import WhyChooseUs from './WhyChooseUs ';
import Testimonials from './Testimonials';
import LatestBlogs from './LatestBlogs';
import Footer from './Footer';


const App = () => {
  return (
    <div>
<Router>
<Navbar />
<Hero />
<Services  />
<AuthPage/>
<TeamMembers  />
<WhyChooseUs  />
<Testimonials  />
<LatestBlogs  />
<Footer/>
  </Router>



    </div>
  )
}

export default App