import st from './style.module.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Alter=()=>{
    let [name,setname]=useState("")
    let [email,setemail]=useState("")

    let namedata=(a)=>{
        setname(a.target.value)
    }

    let emaildata=(a)=>{
        setemail(a.target.value)
    }
    useEffect(()=>{
        
        axios.get(`http://localhost:3000/data/${ss.ddd}`)
        .then((e)=>{
            setname(e.data.name)
            setemail(e.data.email)
        })
    },[])
    
    let nav=useNavigate("http://localhost:3000/data")
    
    let ss=useParams()
    
    let sub=(w)=>{
        w.preventDefault()
        axios.put(`http://localhost:3000/data/${ss.ddd}`,{name:name,email:email})
        .then(()=>{
            console.log("got");
            nav('/all')
        })
    }
    return(
        <div id={st.form}>
            <form action="" id={st.alter_form}>
                <div>
                    <label htmlFor="">Name :</label>
                    <input type="text"  value={name} onChange={namedata}/>
                </div> <br />
                <div>
                    <label htmlFor="">Email :</label>
                    <input type="email" value={email} onChange={emaildata} />
                </div> <br />
                <div id={st.butt}>
                     <button id={st.sub_butt } onClick={sub}>Submit</button>
                </div>
            </form>

        </div>
    )
}
export default Alter