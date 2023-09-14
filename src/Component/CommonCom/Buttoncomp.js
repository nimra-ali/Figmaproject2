const Buttoncomp =({bgclr,btnText, width,height,radius,border,textColor,textSize,left,top,pointer})=>{

return(
        <div>
           <button
            style={{backgroundColor:bgclr,
            width:width,
            height:height,
            borderRadius:radius,
            marginLeft:left,
            border:border,
            color:textColor,
            fontSize:textSize,
            margintop:top,
            cursor:pointer,
           }}>{btnText}</button>
        </div>
)
}
export default Buttoncomp;