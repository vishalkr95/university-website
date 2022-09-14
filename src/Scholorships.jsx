import React from 'react';
import TimeCot from './TimeCot';

import NoticeLeftSide from './NoticeLeftSide';
const Scholorships = () => {
    const ScholorLink = {
        color: "blue",

    }
    return (
        <>
            <TimeCot allInOne="Scholorship" />
            <div id="container">
                <NoticeLeftSide />
                <div id="rightContainer">
                    <div id="scholorship">
                        <h2>Scholarship Links</h2>
                        <div id="scholorLink">
                            <ul>
                                <a style={ScholorLink} href="https://www.wbkanyashree.gov.in/kp_4.0/index.php"><li>https://www.wbkanyashree.gov.in</li></a>
                                <a style={ScholorLink} href="https://www.wbmdfc.org/"><li>http://www.wbmdfc.org</li></a>
                                <a style={ScholorLink} href="http://wbmdfcscholarship.gov.in/"><li>http://wbmdfcscholarship.gov.in</li></a>
                                <a style={ScholorLink} href="https://svmcm.wbhed.gov.in/"><li>https://svmcm.wbhed.gov.in</li></a>
                                <a style={ScholorLink} href="https://scholarships.gov.in/"><li>https://scholarships.gov.in</li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Scholorships;