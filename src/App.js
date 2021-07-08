import React,{createContext} from 'react';
import CompC from './Component/CompC.jsx';
import withBack from './HOC/withBack.jsx';

const FirstName = createContext();
const LastName = createContext();
 function App(){
    return(
     
        <FirstName.Provider value={"Jaspreet"}>
        <LastName.Provider value={" Kaur"}>
            <CompC/>
        </LastName.Provider>            
    </FirstName.Provider> 
    )
        
}
export default withBack(App)
export {FirstName,LastName};