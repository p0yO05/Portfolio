import Fotosm from '../images/Fotosm';
export const AboutMe = () => {
    return(
        <>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(to right, #f87171, rgb(32, 90, 188), rgb(53, 209, 63))', padding: '2rem', margin: '2rem', borderRadius: '0.5rem' }}>
            <div style={{ width: '15rem', height: '20rem', marginBottom: '0rem', border: '0.25rem solid black', borderRadius: '0.5rem', overflow: 'hidden' }}>
                <img src={Fotosm.soyese} alt="yo" style={{ width: '100%', height: '100%', objectFit: 'cover', border: '0.25rem solidrgb(30, 175, 56)', maxWidth: '20rem', maxHeight: '20rem' }} />
            </div>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'pink' }}>Un Poco de Mi</h1>
                <p style={{ marginTop: '0.5rem' , fontSize: '1.9rem' }}>Hola! :)</p>
                <p style={{ marginTop: '0.5rem', fontSize: '1.9rem' }}>Soy Pablo Tabares Ruiz, Tengo 19 años, Actual estudiante en formacion como Ingeniero de Sistemas Y computacion
                    En la Universidad EIA, Soy Programador, Editor, Me Apasiona la tecnologia y me encanta aprender cosas nuevas
                    cada dia, me apasiona la musica, la programacion, los videojuegos, y editar, se me da bien :D.
                </p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'lightgreen' }}>Mis Gustos</h1>
                <p style={{ marginTop: '0.5rem', fontSize: '1.9rem' }}>Siempre quice aprender a poder codificar y crear codigo, llamo mi interes por medio de los videojuegos y la musica
                    y me encanta la idea de poder crear algo que pueda ser util para todos, Tiendo a ser muy creativo en cuanto a encontrar soluciones a problemas
                    que nos rodean diario, al menos en el aspecto tecnologico, se puede solucionar una gran inmensa cantidad de problemas pueden no ser gran cosa
                    pero solucionarlos es la cereza del pastel.    
                </p>
            </div>
            <div style={{ textAlign: 'left' }}> 
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color :'lightblue', }}> Mis Experiencias Academicas y Otras</h1>
                <ul style={{ fontSize: '0.95rem' }}>
                    <li style={{ position: 'relative', paddingLeft: '1.25rem', fontFamily: 'monospace', fontSize: '1.9rem' }}>Participe en el modelo EUSMUN de la ONU en mi colegio como la mayoria de los puestos<br/></li>
                    <li style={{ position: 'relative', paddingLeft: '1.25rem', fontFamily: 'monospace' , fontSize: '1.9rem' }}>Estuve en un curso de robotica un tiempo conociendo lo basico de el cableado y la transmision de la luz<br/></li>
                    <li style={{ position: 'relative', paddingLeft: '1.25rem', fontFamily: 'monospace' , fontSize: '1.9rem' }}>Me gradue a los 16 años con el mejor promedio academico de mi clase<br/></li>
                    <li style={{ position: 'relative', paddingLeft: '1.25rem', fontFamily: 'monospace', fontSize: '1.9rem' }}>Fui Boy Scout, Estuve en clases de Natacion y fui a unos cuantos torneos de ajedrez.</li>
                </ul> 
            </div>        
        </div>
        </>
    )
}