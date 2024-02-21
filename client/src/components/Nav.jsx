import { Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <div>
            <Link to='/form' >
                <button>Create</button>
            </Link>
            <Link to='/home' >
                <button>Home</button>
            </Link>
        </div>
    )
}

export default Nav;