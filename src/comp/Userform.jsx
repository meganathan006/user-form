import st from "./style.module.css"
import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Userform=()=>{
    let [name,setname]=useState("")
    let [email,setemail]=useState("")

    let namedata=(a)=>{
        setname(a.target.value)
    }

    let emaildata=(a)=>{
        setemail(a.target.value)
    }
    let nav=useNavigate("http://localhost:3000/data")

    let sub=(w)=>{
        if (name.length>0 && email.length>0){
        w.preventDefault()
        axios.post("http://localhost:3000/data",{name:name,email:email})
        .then(()=>{
            console.log("got");
            nav('/all')
        })}
        else{
            alert("fill the form")
        }
        
    }
    return(
        <div id={st.form}>
            <form id={st.userform} action="">
                <div><h1>FILL THE FORM</h1></div> <br />
                <div >
                    <label htmlFor="">Enter Name:</label>
                    <input type="text" value={name}  onChange={namedata}/>
                </div> <br />
                <div>
                    <label htmlFor="">Enter Email:</label>
                    <input type="email"  value={email} onChange={emaildata}/>
                </div> <br />
                <div id={st.butt}>
                    <button id={st.sub_butt} onClick={sub}>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Userform