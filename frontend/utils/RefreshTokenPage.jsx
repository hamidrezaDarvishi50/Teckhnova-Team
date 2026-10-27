
// import api from "./axios/config";

// const refresh=async()=>{
//     let navigate=useNavigate()   
//     const refreshToken=getCookie('refreshToken');
//     if(!refreshToken){
//         navigate('/auth')
//     }

//     try{
// const response=await api.post("/refresh/" ,{
//     refresh:refreshToken,
// });return{response}
//     }catch(error){
//     return {error}
//     }
// }

// export {refresh}

import { useEffect } from "react"
// import { getCookie, setCookie } from "../../../utils/cookie";
import {getCookie, removeCookie, setCookie} from "./cookie.js";
import { useNavigate } from "react-router-dom";
// import RiseLoader from 'react-spinners/RiseLoader'
// import './refresh.css'
import handledFetch, { serverAddress } from "./handledfetch.js";
export default function RefreshTokenPage(){

    let navigate=useNavigate()
    function refreshToken(){
        const myHeaders = new Headers();
        myHeaders.append("Authorization", getCookie('refreshToken'));
        

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow"
        };

       fetch(`${serverAddress}api/token/refresh/`, requestOptions,()=>{
         
        })
        .then((response) => {
            if (response.status==200)
                return response.json()
            return false
        })
        .then(res=>{
        if (res) {
            setCookie(res)  
            window.history.back();
        }
        else {
            removeCookie()
            navigate('/')
        }
          
            
        })
        .catch((error) => console.error(error));


        //else go to login page 
    }
    useEffect(()=>{
        refreshToken()
    },[])

    return <div className="refreshPage">
    
    {/* // <HashLoader color="#2e18a4"   size={100}/> */}
    {/* <RiseLoader
  color="#3044b9"
  margin={5}
  size={20}
  speedMultiplier={0.5}
/> */}

md
    
    </div>
}