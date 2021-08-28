import '../styles/About.css'
import BannerImage from '../assests/multiplePizzas.jpeg'
const About = () => {
    return ( 
        <div className="about">
          <div className="aboutTop" style={{backgroundImage: `url(${BannerImage})`}}></div>
          <div className="aboutBottom">
              <h1>About Us</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolores quaerat quos eos libero vitae eaque repellendus corporis illum dolorem cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae dolore aperiam numquam eius alias sint repellendus maxime
            quae veniam blanditiis delectus at tenetur, velit reiciendis atque omnis eveniet laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem delectus maxime eius velit perspiciatis quod nihil optio inventore eum.
             Expedita itaque architecto praesentium inventore incidunt nulla omnis, eligendi quisquam quasi!</p>
          </div>
        </div>
     );
}
 
export default About;