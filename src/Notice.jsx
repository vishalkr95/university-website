import React, { useState } from 'react';
import TimeCot from './TimeCot';

import NoticeLeftSide from './NoticeLeftSide';

import NoticeRightSide from './NoticeRightSide';
const date = new Date();
const Notice = () => {
    const [dateTime, setDate] = useState(date.toLocaleDateString())
    return (
        <>
            <TimeCot allInOne="Notice and Circular" />
            <div id="container">
                <NoticeLeftSide />
                <NoticeRightSide />

            </div >

        </>
    )
}
export default Notice;