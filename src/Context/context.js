import React, {useContext,useEffect,useState} from 'react'
import { useCookies } from 'react-cookie';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
const [userId,setUserId] = useState()
const [jwtToken,setJwtToken] = useState()
const [cookies,setCookies] = useCookies(['user'])
const [verticleHeadId,setVerticleHeadId] = useState()

useEffect(() => {
  setCookies('Token',jwtToken,{path:'/'})
},[jwtToken])


 return (
    <AppContext.Provider value={{
        userId,setUserId,jwtToken,setJwtToken,cookies,verticleHeadId,setVerticleHeadId
    }}>
    {children}
    </AppContext.Provider>
 )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext,AppProvider}