import React from "react";
import './index.css';
// import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import Form from './components/form';
import Footer from './components/footer';
import Banner from './components/banner';
import Button from "./components/button";
import Microsite from "./components/microSite"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Fragment } from 'react'


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/" exact render={() =>
            <Fragment>
              <About />
              <Button />
            </Fragment>
          } />
          <Route path="/about" render={() =>
            <Fragment>
              <About />
              <Button />
            </Fragment>
          } />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact render={() =>
            <Fragment>
              <Contact />
              <Button />
            </Fragment>
          } />
          <Route path="/builder" component={Form} />
          <Route path="/test" component={Microsite} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;





// <head>
//   <title>Campaign Builder Form</title>
//   <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//       <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
//           <link rel="stylesheet" href="../src/index.css">
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
//               <link rel="icon" href="whitebullhorn.png">
// </head>

//               <body>

//                 <!-- Navbar (sit on top) -->
//     <div class="w3-top">
//                   <div class="w3-bar" id="myNavbar">
//                     <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
//                       href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
//                       <i class="fa fa-bars"></i>
//                     </a>
//                     <a href="#home" class="w3-bar-item w3-button" color="white">HOME</a>
//                     <a href="#about" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-bullhorn"></i> ABOUT</a>
//                     <a href="#contact" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</a>
//                     <a href="#builder" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-tools"></i> BUILDER</a>
//                     <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
//                       <i class="fa fa-search"></i>
//                     </a>
//                   </div>

//                   <!-- Navbar on small screens -->
//         <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
//                     <a href="#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
//                     <a href="#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
//                     <a href="#builder" class="w3-bar-item w3-button" onclick="toggleFunction()"> BUILDER</a>
//                     <a href="#" class="w3-bar-item w3-button">SEARCH</a>
//                   </div>
//                 </div>

//                 <!-- First Parallax Image with Logo Text -->
//     <div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
//                   <div class="w3-display-middle" style="white-space:nowrap;">
//                     <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">BUILD A NEW
//                 CAMPAIGN</span>
//                   </div>
//                 </div>

//                 <div class="testbox">
//                   <form action="/submit" method="post">
//                     <div class="banner">

//                     </div>
//                     <div class="item">
//                       <label for="name">Campaign Name<span>*</span></label>
//                       <div class="name-item">
//                         <input id="campaignName" type="text" name="campaignName" placeholder="Give your campaign a name" />
//                       </div>
//                     </div>
//                     <div class="item">
//                       <label for="campaignDesc">Campaign Description<span>*</span></label>
//                       <input id="campaignDesc" type="text" name="campaignDesc" placeholder="Describe the issue" />
//                     </div>
//                     <div class="btn-group">
//                       <label for="RecDonation">Recommended donation<span>*</span></label><br></br>
//                       <input id="RecDonation" type="btn-group" name="RecDonation" required />
//                       <button>$10</button>
//                       <button>$20</button>
//                       <button>$50</button>
//                       <button>$100</button>
//                     </div>
//                     <div class="date">
//                       <label for="startDate">Start camapign</label>
//                       <input type="date" name="startDate" id="startDate" />
//                     </div>
//                     <div class="date">
//                       <label for="endDate">End camapign</label>
//                       <input type="date" name="endDate" id="endDate" />
//                     </div>
//                     <div class="caseStudy">
//                       <label>Select a case study</label>
//                     </div>

//                     <div class="item">
//                       <label for="sunday">Case Study</label>
//                       <input id="sunday" type="text" name="language" />
//                     </div>
//                   </form>
//                 </div>

//                 <!-- Footer -->
//     <footer class="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
//                   <div class="w3-xlarge w3-section">
//                     <i class="fa fa-facebook-official w3-hover-opacity"></i>
//                     <i class="fa fa-instagram w3-hover-opacity"></i>
//                     <i class="fa fa-snapchat w3-hover-opacity"></i>
//                     <i class="fa fa-pinterest-p w3-hover-opacity"></i>
//                     <i class="fa fa-twitter w3-hover-opacity"></i>
//                     <i class="fa fa-linkedin w3-hover-opacity"></i>
//                   </div>
//                 </footer>

//                 <script>

//                   // Change style of navbar on scroll
//         window.onscroll = function () {myFunction()};
//         function myFunction() {
//             var navbar = document.getElementById("myNavbar");
//             if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//                     navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
//             } else {
//                     navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
//             }
//         }

//         // Used to toggle the menu on small screens when clicking on the menu button
//         function toggleFunction() {
//             var x = document.getElementById("navDemo");
//             if (x.className.indexOf("w3-show") == -1) {
//                     x.className += " w3-show";
//             } else {
//                     x.className = x.className.replace(" w3-show", "");
//             }
//         }
//     </script>



// function App() {
//   return (
//     <div>
//       <Navbar />
//       {/* <Banner /> */}
//       <div class="testbox">
//         <form action="/">
//           {/* <Banner /> */}
//           <div class="banner">
//             <h1>Build a new campaign</h1>
//           </div>
//           <div class="item">
//             <label for="name">Campaign Name<span>*</span></label>
//             <div class="name-item">
//               <input id="campaignName" type="text" name="campaignName" placeholder="Give your campaign a name" />
//             </div>
//           </div>
//           <div class="item">
//             <label for="campaignDesc">Campaign Description<span>*</span></label>
//             <input id="campaignDesc" type="text" name="campaignDesc" placeholder="Describe the issue" />
//           </div>
//           <div class="btn-group">
//             <label for="RecDonation">Recommended donation<span>*</span></label><br></br>
//             {/* <input id="RecDonation" type="btn-group" name="RecDonation" required /> */}
//             <button>$10</button>
//             <button>$20</button>
//             <button>$50</button>
//             <button>$100</button>
//           </div>
//           <div class="date">
//             <label for="startDate">Start camapign</label>
//             <input type="date" name="startDate" id="startDate" />
//           </div>
//           <div class="date">
//             <label for="endDate">End camapign</label>
//             <input type="date" name="endDate" id="endDate" />
//           </div>
//           <div class="caseStudy">
//             <label>Select a case study</label>
//             <input id="case" type="dropdown" name="caseStudy" />
//           </div>
//           <div class="btn-block">
//             <button type="submit" href="/">Create Campaign</button>
//           </div>
//         </form>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default App;