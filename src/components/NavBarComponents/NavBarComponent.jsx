import React from 'react'
import {  CartWidget} from "../CartWidget";


export const NavBarComponent = ({clickEvent}) => {

   const styles1 = {
     display: "flex",
    //  justifyContent: "center",
     fontSize: "16px",
     backgroundColor: "green",
     justifyContent: "right"
   }
  const styles2 = {
    display: "flex",
    flex:"inline",
    
    
    fontSize: "20px",
    backgroundColor: "red",
  }
  const styles3 = {
    margin:"10px",
    cursor: "pointer",
    listStyle: "none",
    

  }
  
// export const ButtonNavBar = ({clickEvent}) => {
//   return (
//     <button onClick={clickEvent}></button>
//   );
// }
  


  return (
    <div>
      {/* <div style={styles1}>Red Electro</div> */}
      <div>
      <ul style={styles1}>
        <li style={styles3} onClick={clickEvent} >
            <a href=""><CartWidget />
            </a>
          </li>
        </ul>
        <ul style={styles2}>
          <li style={styles3} onClick={clickEvent} >lavarropas</li>
          <li style={styles3} onClick={clickEvent} >cocina</li>
          <li style={styles3} onClick={clickEvent} >heladera</li>
          <li style={styles3} onClick={clickEvent} >herramientas</li>
          
        </ul>
        
        
      </div>
    </div>
    
  );
}

