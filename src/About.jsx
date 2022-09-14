import React from 'react';
import insImage from './image/institute.jpg';
import principalImage from './image/principal-pic.jpg';
import TimeCot from './TimeCot';
import NoticeLeftSide from './NoticeLeftSide';
const About = () => {
    return (
        <>
            <TimeCot allInOne="Old Notice" />
            <div id="container">
                <NoticeLeftSide />
                <div id="rightContainer">
                    <div id="instituteImage">
                        <img src={insImage} alt="" />
                    </div>

                    <div id="aboutinstitute">
                        <h2 id="aboutTitle">About UIT</h2>

                        <div id="institueContent">
                            <p>Burdwan University Executive Council resolved on June 11, 1999 to set up an engineering institute at the University Campus under the direct control and management of the University of Burdwan – named ‘ University Institute of Technology (UIT)’. On September 16, 1999 Burdwan University Court approved the resolution. As per provisions of the Burdwan University Act under Section 2 Sub-sections 16 and 17 the institute enjoys the status of a Professional College run and managed by the University. The Institute was established in the year 2000. With the approval of Govt of West Bengal and All India Council for Technical Education (AICTE), the Institute has been running Bachelor of Engineering courses in six disciplines.</p>

                            <p>The institute is accredited by TCS and has an academic alliance with IBM, Oracle Corporation and Microsoft Corporation, etc. The National Board for Accreditation (NBA) of AICTE has accredited the Dept. of (1) Electronics and Communication Engg (ECE) and (2) Computer Science and Engg (CSE) for three years effective from 16th April, 2009. Application for re-accreditation and new accreditation for two more new eligible subjects, IT and AEIE will be made by end July 2013.</p>

                            <p>The Institute accorded the approval of Technical Education Quality Improvement Programme (TEQIP) – Phase-II and fund was received from MHRD and State Govt. on 19th July, 2013.</p>

                            <p>The Institute maintains healthy student-faculty ratio and all faculty members are Post-graduates/Ph D.</p>
                            <br />

                            <a href="http://uit.buruniv.ac.in/notifications_files/Mdisclosure2020-21_final.pdf" target="_">Mandatory Disclosure</a>

                            <h2 id="messageTiitle">Message from Principal</h2>
                            <div id="message_from_principal">
                                <img id="imgPrincipal" src={principalImage} alt="" width="20%" height="20%" />
                                <p id="content_mesage">
                                    When a student steps out of the high school, many avenues knock at his door through which his future career can be moulded. It may be fine arts, comparative literature, commerce, journalism, bioinformatics, medicine, pharmacy, physics, management, engineering, and so on. Definitely, the student ponders, what to choose? And how to choose? When the student looks around, he finds many of his seniors chose engineering as their career. He becomes more confused. Why engineering? What’s so specialty? This is the starting point of our quest. In order to understand the value of engineering, let us have a look at our modern day everyday society. Starting from the electronic voting machine (EVM) of general election time to WhatsApp messages of android mobile phone to action replay of a cricket match to hybrid sweet corn production to rainwater harvesting in arid zone to underground tunnel metro railway to 260 meter tall The 42 in Kolkata and even to India shooting into star wars club through ISRO, everywhere we find the examples of engineering. Therefore, studying engineering gives one the opportunity to join the above mentioned leagues of engineers in future. But, of course, in order to study engineering, a student must have science background with fondness toward maths and physics. Next, when a student joins an engineering course with science background, he gradually acquires logical thinking and critical analysis skills throughout his course curricula. Further, after passing out, a student becomes ready to encounter any kind of problems in technical life which is inculcated to him through his rigorous training. And that is the time he realizes the true potential of the saying “engineers move the world”.
<br />
                                    <br />
                                    So engineering becomes one of the best viable alternatives for a science background high school pass out student. He then hesitates, which institute to choose? Which stream? Well, in order to choose a stream, a student is advised to explore his strengths and to ascertain his personality type and then only to take a decision with the help of an academician. However, to choose an institute, certain parameters are to be determined properly. As the primary check list, the approval of AICTE, proper affiliation with a reputed University and accreditation has to be looked for. Then comes the placement scenario and the reputation of the college. Finally, the quality of full time faculty members, faculty-student ratio and proper infrastructure has to be explored. And these are the reasons UIT is way ahead of other colleges in West Bengal. It is the only Govt. engineering college affiliated to The University of Burdwan in the entire Burdwan district. Two departments of UIT were accredited by NBA a few years back and very soon we are going to repeat the process for all departments. It has qualified faculty members, required ratio of faculty-student and the best infrastructure among all Govt. colleges in Burdwan district. Here, students are given placement in the best of the industry like INTEL, TCS, WIPRO, IBM, LandT Infotech, CTS, Open Silicon, Pernod Ricard, just to name a few. Moreover, our teaching-learning process is solely ‘outcome based’, as outlined by NBA. In order to prepare a student properly for placement, we focus on soft-skill training of a student including personality development as well as group discussion and personal interview preparations. The syllabi are updated as prescribed by AICTE and several topics from Massive Open Online Courses (MOOCs) are offered for students on regular basis. In general, it is a holistic approach of education and we believe that quality of education is the key to success.

Dear students, I believe you have come to the right place of engineering by choosing UIT and I welcome you all to UIT for the session 2019-20.</p>
                            </div>

                            <div id="principal_name">
                                <p><a href="http://uit.buruniv.ac.in/cv/cv_forwebpage_prof_a_mitra.pdf" target="_">
                                    Prof. Abhijit Mitra</a></p>

                                <p>PhD, FIE, FIETE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;