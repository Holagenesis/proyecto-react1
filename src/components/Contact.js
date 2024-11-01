
const Contact = () =>{
    return(
        <div className="contact-container">
            <img src="contact.jpg" alt="img-contact" />
            <div className="contact-gradient">
                <div className="contact-left">
                    <form>
                        <input type="email" placeholder="Introducir su email" />
                        <textarea placeholder="escribe tu mensaje" />
                        <button className="btn">Enviar</button>
                    </form>
                </div>
                <div className="contact-right">
                  <h1>El libro es fuerza, es valor, es poder, es alimento; 
                     antorcha del pensamiento, y manantial del amor
                  </h1>
                  <p>Ruben Dario, poeta, periodista y diplomático nicaragüense</p>
                </div>
            </div>
            
        </div>
    );
}

export default Contact;