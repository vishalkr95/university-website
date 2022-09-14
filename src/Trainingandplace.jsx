import React from 'react';
import TimeCot from './TimeCot';
import NoticeLeftSide from './NoticeLeftSide';
import placement2Image from './image/placement2.jpg';
import placement1Image from './image/placement1.jpg';
import placement3Image from './image/placement3.jpg';
const Trainingandplace = () => {

    return (
        <>
            <TimeCot allInOne="Training and Placement" />
            <div id="container">
                <NoticeLeftSide />
                <div id="rightContainer">
                    <div id="placement">
                        <img src={placement2Image} alt="" />
                    </div>

                    <div id="training">
                        <h2 style={{ paddingTop: "0.5em" }}>Training</h2>
                        <div id="trainingContent">
                            <p>It is becoming increasingly difficult for the institute authority to arrange for vocational training for all the students free of cost. The students are encouraged to arrange vocational training for themselves by their own efforts. They should also be prepared to pay the requisite training fee/ charges demanded by different organizations for training for training to be arranged by the institute authority.</p>

                            <p>Summer training has been arranged in different Government, Private and Government Undertaking organizations. Some of them are ISI, Kolkata; CMERI, Durgapur; NICS, Kolkata; DVC, Jharkhand; ONGC, Kolkata; SINP, Kolkata; WBPDCL, Bakreswar; NTPC, Farakka; Webel Mediatronics, Kolkata; Tathya.com, Kolkata; DCL, Kolkata; DPL, Durgapur; ASP, Durgapur; BNK-e Solution, Kolkata; VAI Engineering and Automation, Kolkata, Philips Carbon, Durgapur; Airport Authority of India, Kolkata; WBSEDCL, NKID, etc.

</p>
                            <div id="placement3">
                                <img src={placement3Image} alt="" />
                            </div>

                            <div id="placementContent">
                                <p>The institute authority makes sincere efforts to arrange a number of interviews both on campus and off campus, where the students prove their merits to secure an employment. Institute arranges training and soft skills for the students to increase the employability skills at their own cost. As a result of the sincere efforts of the institute and students, a good percentage of students could be placed through on and off campus drive in the year of 2011 and 2012. Like previous years, companies such as TCS, IBM, LandT, Infotech, Infosys, i-Flex, FCG, CMC, Tech Mahindra, Mahindra Satyam, Haldia Petrochemicals, Matix Fertilizer, Wipro Infotech, Pinnacle, Zycus, Indian Army, Indian Navy etc. Were contacted for on and off campusing.</p>
                            </div>

                            <div id="detail_and_placement">
                                <h1>Detail of Training and Placement Officer</h1>

                                <div id="mrRupancontent">
                                    <p>Mr. Rupam Gangopadhyay</p>
                                    <p>Telefax: +91-342-2658776 Fax:+91-342-2530452,</p>
                                    <p><b>WLL: +919476322966</b></p>
                                    <p><b>Mob: +919564632839, 9382092494, 9382182071</b></p>
                                    <p>For detail mail us at: principal@uit.buruniv.ac.in, placement@uit.buruniv.ac.in, uitbuburdwan@yahoo.co.in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Trainingandplace;