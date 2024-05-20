import './Navbar.css'
const Navbar = ()=>{
    return (
        <nav>
            <div className="logo">
                <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
                <h2>GeekFoods</h2>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Quote</a></li>
                <li><a href="#">Restaurants</a></li>
                <li><a href="#">Foods</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="btn">
                <button>Get started</button>
            </div>
        </nav>
    )
}

export default Navbar;