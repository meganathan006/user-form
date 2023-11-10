import st from './style.module.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Alldetails=()=>{
    let [data,setdata]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/data")
        .then((a)=>{setdata(a.data)})
        
    },[])
    let del=(a)=>{
        let aw=prompt("you wanna remove")
        if (aw=="yes"){
            axios.delete(`http://localhost:3000/data/${a}`)
            window.location.assign('/all')
        }
        
        
    }
    let nav=useNavigate("http://localhost:3000/data")
    let add=()=>{
         nav('/')
    }
    return(
        <div id={st.details}>
            <div>
               <div>
                  <button onClick={add}>Add more</button>
                </div>
           {data.map((x)=>{
            return(
                <div id={st.data}>
                    <h1>Emp Id : {x.id}</h1> <br />
                    <h2>Emp Name :{x.name}</h2> <br />
                    <h2>Emp Email :{x.email}</h2> <br />
                    <div id={st.sub_form_butt}>
                        <button><Link to={`/alter/${x.id}`}>Alter</Link></button>
                        <button onClick={()=>{del(x.id)}}>Remove</button>
                    </div>
                </div>
            )
           })}
           </div>
        </div>
    )
}
export default Alldetails