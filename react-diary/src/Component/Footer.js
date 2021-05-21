import React from 'react'
import propTypes from 'prop-types'


/*export const Footer = (x) => {
    return (
        <div>
            {x.title} <br></br>
            {x.check ? "Copyright @2021": ""}
            
        </div>

        
    )
}*/
export default function Footer() {
    return (
       <>
       <div className="foot">
       <h3 >Made by Siddharth Pandey  Copyright @2021</h3>
       </div>
       </>
    )
}




/*Used for defining the Default Value*/

/*Footer.defaultProps ={
    title : "Made by Siddharth Pandey",
    check : true,

}*/

/*Used for defining the Datatype of the variable*/

/*
Footer.propTypes ={
    title:propTypes.string,
    check:propTypes.bool,
}*/