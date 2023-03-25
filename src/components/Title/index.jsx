import React from 'react';


export const Title = (props) =>{
    console.log(props)
    const styles = {
         height: "60px",
         backgroundColor: "gray",
         color: "black",
         textAlign: "center",
         
         
       
        
        
        
    }

    return (
        <header>
            <h1 style={styles}>{props.greeting}</h1>
        </header>
        
    )
}
export default Title;

