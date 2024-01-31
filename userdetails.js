import React from 'react';
import {useState, useEffect} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const fetch = require("node-fetch");


const Userdetails =()=>{
    
    let[details,setdetails] = useState([]);
   

    const getdetails = async() =>{
        await fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(result =>{
            //alert(result.length);
            setdetails(result);

        })
    }
    const olddetails = details;
     const refresh = ()=>{
        window.location.reload(false);
        setdetails(olddetails=>[...olddetails,details]);
      
        //alert("refresh");
     }
    useEffect(()=>{
        getdetails();
        localStorage.setItem("information",JSON.stringify([details]));
    },[details]);// 1 in array represents useeffect will execute only once
    console.log("application redered");
    return(
        <div className='container'>
            <div className='row'>
        <div className='col-lg-3'></div>
        <div className='col-lg-6'>
            <h1> here details are printed</h1>
             <table className='table'>
                <thead>
                <tr>
                    <th>Name</th>
                    <td>email</td>
                </tr>
                </thead>
                <tbody>
                    {
                      details.map((detail,index)=>{
                        return(
                            <tr>
                                <th>{detail.name}</th>
                                <td>{detail.email}</td>
                            </tr>
                        )
                      })  
                    }
                    
                </tbody>
                
                
             </table>
             <button onClick={refresh}>refresh</button>
        
        </div>
         <div className='col-lg-3'></div>        
          </div>  
          </div>
    )
           
}
export default Userdetails;








