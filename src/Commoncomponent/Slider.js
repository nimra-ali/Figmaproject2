
import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";

import Navbar from "../Navbar";
import Homestyle from "./Homestyle";
// ScrollHorizontally(); 
class Signup extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
<>
<Navbar/>
     <ReactFullpage 
        navigation={true}
        // scrollOverflow{false}
        scrollOverflow={false}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (

            <ReactFullpage.Wrapper>
                <div className="section">
<Homestyle/>
                </div>
              {/* {/* <div className="section">
                <Firstpage />
              </div> */}
              {/* <div className="section">
                <Secondpage />
              </div>
              <div className="section">
                <Thirdpage />
              </div>
              <div className="section">
                <Fourthpage/>
              </div>
              <div className="section">
                <Fifthpage />
              </div>
              <div className="section">
                <Lastpage />
              </div>
              <div className="section">
                <Questionpage />
              </div> */} 
              {/* <div className="section">
                <Footer/>
              </div> */}

            </ReactFullpage.Wrapper>
          );
        }}
      />
      </>
    );
  }
}

export default Signup;