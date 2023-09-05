import React , {useState} from 'react';
import Commondata from './Commondata';
import Homestyle from './Homestyle';
import ReactFullpage from "@fullpage/react-fullpage";
// import Buttoncomp from './Buttoncomp';

import Navbar from "../Component/Navbar";


function Homepages() {
// const sectionsCommondata = CommonData;
const [CommonData, setCommonData] = useState(Commondata);
console.log(Commondata)

return (
    <div>
        <Navbar/>
        <ReactFullpage 
        navigation={true}
        // scrollOverflow{false}
        scrollOverflow={false}
        // onLeave={this.onLeave.bind(this)}
        // afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (

            <ReactFullpage.Wrapper>
    {CommonData.map((section , index)=>(
        <div className='section' key={index}>
            {/* <Buttoncomp className='comin'/> */}
        <Homestyle
    // id={index}
    tittle={section.tittle}
    description={section.description}
    dotimg={section.dotimg}
    image={section.image}
    button={section.button}
    button2={section.button2}

    /> 
</div>
))}
    </ReactFullpage.Wrapper>
)}}
/>
</div>
)}
export default Homepages;