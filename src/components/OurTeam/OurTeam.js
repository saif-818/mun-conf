import React from "react";
import "./OurTeam.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


import Varun_Sovani from '../../assets/team/Varun_Sovani.jpg'
import Mansi from "../../assets/team/Mansi.jpg";
import Rahul from "../../assets/team/rahul.jpg";
import Saifuddin from "../../assets/team/Saifuddin.jpeg";
import Aditya_Gudade from '../../assets/team/Aditya_Gudade.jpg';
import Hetavi_Gandhi from '../../assets/team/Hetavi_Gandhi.jpg';
import Apoorvaraj_Londhe from '../../assets/team/Apoorvaraj_Londhe.jpg';
import Harsh_Bhat from '../../assets/team/Harsh_Bhat.jpg'
import Divya_Lambhate from '../../assets/team/Divya_Lambhate.jpg'
import Tanishq_Mohite from '../../assets/team/Tanishq_Mohite.jpg'
import Manas_Deshpande from '../../assets/team/Manas_Deshpande.jpg'
import Sanket_Lokhande from '../../assets/team/Sanket_Lokhande.jpg'
import Sanika_Gaikwad from '../../assets/team/Sanika_Gaikwad.jpg'
import Anuja_Katruwar from '../../assets/team/Anuja_Katruwar.jpg'
import Rashmi_Bansode from '../../assets/team/Rashmi_Bansode.jpg'
import Varun_Kale from '../../assets/team/Varun_Kale.jpeg'
import Aditya_Patil from '../../assets/team/Aditya_Patil.jpg'
import Kanhu from '../../assets/team/Kanhu.jpg'

import Title from "./Title";
import Footer from "../Footer";

const OurTeam = () => {
  return (
    <div>
      <Title />

      <div class="container">
       
        
        <div class="heads">
        <div class="content_design">
        <div className="team_heading1">Secretariat 2022-23</div>
          <div class="card">
            <div class="content">
              <div class="imgBx1">
                <img src={Aditya_Gudade} alt="person1" />
              </div>
              <div class="contentBx">
                <h3>
                  Aditya Gudade
                  <br />
                  <span>Director General</span>
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <a
                  href="https://www.linkedin.com/in/ahmed-17-siddiqui/"
                  target="blank"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/med17sidd/" target="blank">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>

          <div class="card">
            <div class="content">
              <div class="imgBx1">
                <img src={Hetavi_Gandhi} alt="person1" />
              </div>
              <div class="contentBx">
                <h3>
                  Hetavi Gandhi
                  <br />
                  <span>Secretary General</span>
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <a
                  href="https://www.linkedin.com/in/malhaar-karandikar-20802a1b4/"
                  target="blank"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/to_be_mk/" target="blank">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>


        <div class="heads">
        <div class="content_design">
        <div class="card">
          <div class="content">
            <div class="imgBx1">
              <img src={Sanika_Gaikwad} alt="person1" />
            </div>
            <div class="contentBx">
              <h3>
                Sanika Gaikwad
                <br />
                <span>Executive Director</span>
              </h3>
            </div>
          </div>
          <ul class="sci">
            <li>
              <a
                href="https://www.linkedin.com/in/sufiya-sayyed-737534205/"
                target="blank"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/s.sufiya_/" target="blank">
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
        <div class="card">
          <div class="content">
            <div class="imgBx1">
              <img src={Varun_Kale} alt="person1" />
            </div>
            <div class="contentBx">
              <h3>
                 Varun Kale
                <br />
                <span>Chief Strategic Officer</span>
              </h3>
            </div>
          </div>
          <ul class="sci">
            <li>
              <a
                href="https://www.linkedin.com/in/yash-kale-0a92581ba/"
                target="blank"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/accounts/login/?next=/inferno_080/"
                target="blank"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
        </div>
        </div>
      

        {/* Row 3 Design and Content Team */}

        <div class="heads">
          <div class="content_design">
            <div className="team_heading2">USG DESIGN</div>

            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Apoorvaraj_Londhe} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Apoorvaraj Londhe
                    <br />
                    <span>USG Design</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/karthik-panicker-40a4b619b/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="/#" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>

            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Sanika_Gaikwad} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Sanika Gaikwad
                    <br />
                    <span>USG Design</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/saima-ansari-66a99b188/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/_saimaansari_/" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>



          <div class="content_design">
            <div className="team_heading2">USG CONTENT</div>
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Harsh_Bhat} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                     Harsh Bhat
                    <br />
                    <span>USG Content and Research</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/zeelpatel2001/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/zeel._/" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Anuja_Katruwar} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Anuja Katruwar
                    <br />
                    <span>USG Content and Research</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a href="https://www.linkedin.com/in/abhishekbora09/">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/abhiiii__9/">
                    <InstagramIcon />
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>


        {/* Row 4 Delegate Affairs and Operations Team */}

        <div class="heads">
          <div class="content_design">
            <div className="team_heading2" style={{paddingLeft: '5%'}}>USG DELEGATE</div>

            {/* <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Karthik_Formal} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Karthik Panicker
                    <br />
                    <span>USG Content and Research</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/karthik-panicker-40a4b619b/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="/#" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div> */}

            <div class="card card1" style={{marginTop:'123px',}}>
              <div class="content">
                <div class="imgBx">
                  <img src={Varun_Sovani} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                     Varun Sovani
                    <br />
                    <span>USG Delegate Affairs</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/saima-ansari-66a99b188/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/_saimaansari_/" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>



          <div class="content_design">
            <div className="team_heading2">USG OPERATIONS</div>
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Manas_Deshpande} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Manas Deshpande
                    <br />
                    <span>USG Operations</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/zeelpatel2001/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/zeel._/" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Sanket_Lokhande} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Sanket Lokhande
                    <br />
                    <span>USG Operations</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a href="https://www.linkedin.com/in/abhishekbora09/">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/abhiiii__9/">
                    <InstagramIcon />
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>




        {/* Row 5 Marketing and Out Reach */}

        <div class="heads">
          <div class="content_design">
            <div className="team_heading2">MARKETING</div>

            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Tanishq_Mohite} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                     Tanishq Mohite
                    <br />
                    <span>USG Marketing</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/karthik-panicker-40a4b619b/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="/#" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>

            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Divya_Lambhate} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Divya Lambhate
                    <br />
                    <span>USG Marketing</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/saima-ansari-66a99b188/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/_saimaansari_/" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>



          <div class="content_design">
            <div className="team_heading2">USG OUTREACH</div>
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Rashmi_Bansode} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Rashmi Bansode
                    <br />
                    <span>USG Outreach</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/zeelpatel2001/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/zeel._/" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Varun_Kale} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                     Varun Kale
                    <br />
                    <span>USG Outreach</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a href="https://www.linkedin.com/in/abhishekbora09/">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/abhiiii__9/">
                    <InstagramIcon />
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Row 6 Web Team  */}
        <>


        <div class="heads">
        <div class="content_design">

          <div class="heads">
            <div className="team_heading">WEB TEAM</div><br />
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Saifuddin} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Saifuddin Shaikh
                    <br />
                    <span>USG Technical</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/saifuddin-shaikh-87a0b2217"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="/#" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>

            {/* <div class="card card1">
            <div class="content">
              <div class="imgBx">
                <img src={Saifuddin} alt="person1" />
              </div>
              <div class="contentBx">
                <h3>
                  Saifuddin Shaikh
                  <br />
                  <span>Web Team Member</span>
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <a
                  href="https://www.linkedin.com/in/saifuddin-shaikh-87a0b2217"
                  target="blank"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a href="/#" target="blank">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div> */}

            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Mansi} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Mansi Gundre
                    <br />
                    <span>USG Technical</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/mansi-gundre-a6a722207/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/mansii.iii.__" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Rahul} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Rahul Amrutkar
                    <br />
                    <span>Web Team Member</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/rahul-amrutkar-03149b221"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/rkamrutkar1234@" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
          </div>
        </>
        {/* Video Editing */}
        <div class="heads">
        <div class="content_design">

          <div class="heads">
            <div className="team_heading">VIDEO EDITING</div><br />
            

            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Kanhu} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                     Kanhu
                    <br />
                    <span>USG Video Editing</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/mansi-gundre-a6a722207/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/mansii.iii.__" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Aditya_Patil} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                     Aditya Patil
                    <br />
                    <span>USG Video Editing</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/rahul-amrutkar-03149b221"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/rkamrutkar1234@" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
          </div>

      </div>
      
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default OurTeam;
