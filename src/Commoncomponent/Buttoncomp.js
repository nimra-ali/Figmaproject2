

const Buttoncomp =({bgclr,btnText, width,height,radius,border,textColor,textSize,left,top})=>{

   

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
            
        
        }}>{btnText}</button>
        </div>
    )
}

export default Buttoncomp