import { Link } from "react-router-dom";

const Landing = ()=>{
    return(
        <div>
            <h1>Henry Videogames</h1>
            <Link to='/home' >
                <button>Go home</button>
            </Link>
        </div>
    )
}

export default Landing;