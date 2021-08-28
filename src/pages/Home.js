import { Link } from "react-router-dom";
import BannerImage from '../assests/pizza.jpeg'
import '../styles/Home.css'
const Home = () => {
    return ( 
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1>Domino's Pizza</h1>
                <p>Taste the difference</p>
                <Link to="/menu">
                <button>Order Now</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Home;