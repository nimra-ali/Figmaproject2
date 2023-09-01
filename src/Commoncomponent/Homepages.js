import React , {useState} from 'react';
import Commondata from './Commondata';
import Homestyle from './Homestyle';
import ReactFullpage from "@fullpage/react-fullpage";

import Navbar from "../Component/Navbar";
// import Homestyle from "./Homestyle";

function Homepages() {
const [CommonData, setCommonData] = useState(Commondata);
console.log(Commondata)

return (

    <div>
        <Navbar className='navb'/>
        <ReactFullpage 
        navigation={true}
        // scrollOverflow{false}
        scrollOverflow={false}
        // onLeave={this.onLeave.bind(this)}
        // afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (

            <ReactFullpage.Wrapper>
    {CommonData.map((item , index)=>(
        <div className='section' key={index}>
        <Homestyle
        id={index}
    tittle={item.tittle}
    description={item.description}
    dotimg={item.dotimg}
    image={item.image}
    /> 
    </div>

    ))}
    </ReactFullpage.Wrapper>
)}}
/>
</div>
)}
export default Homepages;