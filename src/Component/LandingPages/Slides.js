import React from 'react'
import Navbar from '../Navbar'
import Firstpage from './Firstpage';
import Secondpage from './Secondpage';
import Thirdpage from './Thirdpage';
import Fourthpage from './Fourthpage';
import Fifthpage from './Fifthpage';
import Lastpage from './Lastpage'
import {ISlideConfig, PageSlides, SlideParallaxType} from 'react-page-slides';



function Slides() {
    const slides: ISlideConfig[] = [
        {
            content: <div>
                <Firstpage/>
            </div>,
           
        },
        {
            content: <div>
                <Secondpage/>
            </div>
           
        },
        {
            content: <div>
                <Thirdpage/>
            </div>,
           
        },
        {
            content: <div>
                <Fourthpage/>
            </div>,
           
        },
        {
            content: <div>
                <Fifthpage/>
            </div>,
           
        },
        {
            content: <div>
                <Lastpage/>
            </div>,
           
        },
    ];
    return (
        <div>

            <Navbar/>
            <PageSlides
            enableAutoScroll={true}
            transitionSpeed={1000}
            slides={slides}
            parallax={{
                    offset: 0.6,
                    type: SlideParallaxType.reveal
                }}
            />
        </div>
    )
};


export default Slides