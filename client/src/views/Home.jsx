
const Home = ()=>{
    return(
        <div>
            <div>
                <h1>Videogames</h1>
            </div>
            <div>
                <div>
                    <input type="text" placeholder="Search" />
                    <select name="Genres" id="">
                        <option value="All">All</option>
                        <option value="Action">Action</option>
                        <option value="Indie">Indie</option>
                        <option value="RPG">RPG</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Shooter">Shooter</option>
                        <option value="Casual">Casual</option>
                        <option value="Simulation">Simulation</option>
                        <option value="Puzzle">Puzzle</option>
                        <option value="Arcade">Arcade</option>
                        <option value="Platformer">Platformer</option>
                        <option value="Racing">Racing</option>
                        <option value="Massively Multiplayer">Massively Multiplayer</option>
                        <option value="Sports">Sports</option>
                        <option value="Fighting">Fighting</option>
                        <option value="Family">Family</option>
                        <option value="Board Games">Board Games</option>
                        <option value="Educational">Educational</option>
                        <option value="Card">Card</option>
                    </select>
                    <select name="API or DB" id="">
                        <option value="Api">Viodeogames to Api</option>
                        <option value="Db">Viodeogames to Db</option>
                    </select>
                    <select name="Order" id="">
                        <option value="Random">Random</option>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendente</option>
                        <option value="A">A-B</option>
                        <option value="B">B-A</option>
                        <option value="Rating">Rating</option>
                    </select>
                </div>
                <div>
                    <div></div>
                    <div>
                        <button>Prev</button>
                        <p>1</p>
                        <button>Nex</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home; 