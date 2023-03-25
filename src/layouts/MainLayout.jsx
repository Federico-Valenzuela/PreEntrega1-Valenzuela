import React from 'react';
import { NavBarComponent } from "../components";

export const MainLayout = ({children}) => {

    const styles = {
        
         backgroundColor: "black",
         color: "white",
       
        
        
        
    }
    
    
    return (
        
        <div style={styles}>
            <h1 style={styles}>Red-Electro</h1>
            <NavBarComponent clickEvent={() =>console.log("redireccionar a pagina")}/>
             {children}
        </div>
    

        // <p>hola mundo</p>
    //   <ButtonComponent label="boton Principal" clickEvent={() =>console.log("boton primario")} />,
    //   <ButtonComponent label="boton secundario" clickEvent={() =>console.log("boton secundario")} />,
    //   <ButtonComponent label="boton terciario" clickEvent={() =>console.log("boton terciario")} />
    )
}