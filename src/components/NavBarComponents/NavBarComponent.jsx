import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'


export const NavBarComponent = ({clickEvent}) => {

  const styles1 = {
    display: "flex",
    justifyContent: "center",
    fontSize: "50px",
    backgroundColor: "green",
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
    <header>
      <div style={styles1}>Red Electro</div>
      <div>
        <ul style={styles2}>
          <li style={styles3} onClick={clickEvent} >lavarropas</li>
          <li style={styles3} onClick={clickEvent} >cocina</li>
          <li style={styles3} onClick={clickEvent} >heladera</li>
          <li style={styles3} onClick={clickEvent} >herramientas</li>
        </ul>
      </div>
    </header>
    
  );
}

