
import { Link } from "react-router-dom"
export const Menu = () => {
  return (
    <>
        
<div style={{ backgroundColor: '#f9fafb', color: '#1f2937', border: '1px solidrgb(8, 11, 15)', borderRadius: '4px', padding: '16px' }}>
    <nav>
        <div style={{ maxWidth: '1280px', padding: '12px 16px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <ul style={{ display: 'flex', flexDirection: 'row', fontWeight: '500', marginTop: '0', gap: '32px', fontSize: '14px' }}>
                    <li>
                        <Link to="/AboutMe" style={{ color: '#1f2937', textDecoration: 'underline' }}>Algo Sobre Mi</Link>
                    </li>
                    <li>
                        <Link to="/Projects" style={{ color: '#1f2937', textDecoration: 'underline' }}>Mis Proyectos</Link>
                    </li>
                    <li>
                        <Link to="/Hobbies" style={{ color: '#1f2937', textDecoration: 'underline' }}>Hobbies n Likes</Link>
                    </li>
                    <li>
                        <Link to="/Contact" style={{ color: '#1f2937', textDecoration: 'underline' }}>Contacto</Link>
                    </li>
                    <li>
                        <Link to="/Hopes" style={{ color: '#1f2937', textDecoration: 'underline' }}>Esperanzas a Futuro</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
    </>
  )
}