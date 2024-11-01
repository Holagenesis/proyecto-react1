
const Info= () =>{
    return(
     <div className="info">
        <div className="info-container">
            <div className="info-card">
                <img src="libro1.png" alt="img-topic" />
                <h1>La lectura reduce la presión arterial y la frecuencia cardíaca</h1>
                <button className="btn">Ver mas</button>
            </div>
            <div className="info-card">
                <img src="logo.png" alt="img-topic" />
                <h1>La lectura retrasa la aparición de problemas mentales </h1>
                <button className="btn">Ver mas</button>
            </div>
            <div className="info-card">
                <img src="libro2.png" alt="img-topic" />
                <h1>La lectura puede ayudar con la depresión y la ansiedad</h1>
                <button className="btn">Ver mas</button>
            </div>
        </div>
     </div>
        
    );
}

export default Info;