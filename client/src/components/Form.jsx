const Form = ()=>{
    return(
        <div>
            <h1>Videogames Customs</h1>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Image" />
            <input type="text" placeholder="Description" />
            <input type="text" placeholder="Platforms" />
            <input type="text" placeholder="Release" />
            <input type="text" placeholder="Rating" />
            <div>
                <button>Action</button>
                <button>Indie</button>
                <button>RPG</button>
                <button>Adventure</button>
                <button>Strategy</button>
                <button>Shooter</button>
                <button>Casual</button>
                <button>Simulation</button>
                <button>Puzzle</button>
                <button>Arcade</button>
                <button>Platformer</button>
                <button>Racing</button>
                <button>Sports</button>
                <button>Fighting</button>
                <button>Family</button>
                <button>Board Games</button>
                <button>Educational</button>
                <button>Card</button>
            </div>
            <button>Create</button>
        </div>
    )
}

export default Form;