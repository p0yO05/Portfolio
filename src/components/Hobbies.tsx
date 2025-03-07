import Logo from "../images/Logo";
export const Hobbies = () => {
    return (
        <>
        <div style={{ background: 'linear-gradient(to right, lightblue, lightgreen)', padding: '20px', marginBottom: '20px' }}>
            <h2 style={{fontSize: '3rem', justifyContent: 'center'}}>Videojuegos y Entrenemiento Multimedia</h2>
            <p style={{fontSize: '1.4rem'}}>Ya no es tan exotico mencionar que una de mis actividades habituales como hobbie son los videojuegos, hacer memes y pasar un buen rato en las redes, mas cuando me dedico a algo tan concreto como la edicion ahi
             ahi soy un poquito perfeccionista, incluyendo asi la edicion de videos y contenido que se me ocurra en mi cabeza
            </p>
            <div style={{ height: '300px', background: 'linear-gradient(to right, lightblue, white, white, lightgreen)', marginTop: '10px', justifyContent: 'center', alignContent: 'center', display: 'flex'  }}>
            <img src="https://i.kym-cdn.com/photos/images/newsfeed/002/331/927/047.jpg" alt="dog" style={{ width: '15%', height: 'auto' }} />
            </div>
        </div>
        <div style={{ background: 'linear-gradient(to right, red, pink)', padding: '20px' }}>
            <h2 style={{fontSize: '3rem'}}>Pasatiempo Con IA Covers</h2>
            <p style={{fontSize: '1.4rem'}}>Usando Programas de Google Colab, Fakeyou y otras paginas y herramientas destinados a esto mismo, a pesar de que genere las vocales de la musica que quiero hacerle cover, me dedico a 
                editar, modificar y mejorar algunas canciones de mi agrado y tambien pedidas por alguno de mis amigos.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <div style={{ width: '30%', backgroundColor: '#e0e0e0', height: '200px' }}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HdlPOLfu1jM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            
            <div style={{ fontSize: '2rem', width: '30%', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, sans-serif', borderRadius: '50%', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <img src={Logo.ThisIsMe} alt="Coming Soon" style={{ display: 'flex' }} />
            Coming Soon...
            <img src={Logo.ThisIsMe} alt="Coming Soon" style={{ display: 'flex' }} />

            </div>
            <div style={{ width: '30%', backgroundColor: 'pink', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/U3VrCWoMUY8" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            </div>
        </div>
        </>
    )
}