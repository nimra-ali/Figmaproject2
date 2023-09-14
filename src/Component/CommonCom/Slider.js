import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Loginform from "../Component/Authentication/LoginFoam/Loginform";
import '../Asset/Style.css/Navbar.css'





class Slider extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
<>

     <ReactFullpage 
        navigation={true}
       
        scrollOverflow={false}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (

            <ReactFullpage.Wrapper>
                <div className="section">
<Homestyle/>
<Loginform/>
</div>
  </ReactFullpage.Wrapper>
          );
        }}
      />
      </>
    );
  }
}

export default Slider;