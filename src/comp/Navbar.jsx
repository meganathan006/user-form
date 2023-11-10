import st from './style.module.css'
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        <div id={st.nav}>
            <h1><Link to="/">Create user</Link></h1> <br />
            <h1><Link to='/all'>Users details</Link></h1>
        </div>
    )
}
export default Navbar