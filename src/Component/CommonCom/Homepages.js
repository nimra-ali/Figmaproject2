import React, { useState } from 'react';
import Commondata from './Commondata';
import Homestyle from './Homestyle';
import ReactFullpage from "@fullpage/react-fullpage";
import Lastpage from './Lastpage';
import Navbar from "../CommonCom/Navbar";



function Homepages() {

    const [CommonData, setCommonData] = useState(Commondata);
    console.log(Commondata)

    return (
        <div>
            <Navbar />
            <ReactFullpage
                navigation={true}

                scrollOverflow={false}

                render={({ state, fullpageApi }) => {
                    return (

                        <ReactFullpage.Wrapper>
                            {CommonData.map((section, index) => (
                                <div className='section' key={index}>

                                    <Homestyle

                                        tittle={section.tittle}
                                        description={section.description}
                                        dotimg={section.dotimg}
                                        image={section.image}
                                        button={section.button}
                                        button2={section.button2}

                                    />
                                </div>
                            ))}
<Lastpage/>

                        </ReactFullpage.Wrapper>
                    )
                }}
                />
        </div>
)
}
export default Homepages;