import PizzaLeft from '../assests/pizzaLeft.jpg'
import '../styles/Contact.css'
const Contact = () => {
    return ( 
        <div className="contact">
            <div className="leftSide" style={{backgroundImage: `url(${PizzaLeft})`}}></div>
            <div className="rightSide">
                <h1>Contact Form</h1>
                <form  id="contact-form" action="POST">
                    <label htmlFor="name" />Full Name
                        <input type="text" name="name" placeholder="Enter Full name..." />
                    <label htmlFor="email" />Email
                    <input type="email" name="email" placeholder="Enter Email" />
                    <label htmlFor="message" />
                        <textarea name="message" id="" cols="30" rows="10"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;