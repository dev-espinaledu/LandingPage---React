function Encabezado(){
    return ( <>
        <header className='header'>
        <h1 className='title'>Tienda</h1>
    <nav className='nav'>
        <ul>
        <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>
        </header>
    
    </>
    )
}
function Cuerpo(){
    return ( <>
        <img src="https://img.freepik.com/vector-gratis/fondo-abstracto-azul_1393-339.jpg?t=st=1717541777~exp=1717545377~hmac=b13ddff8b46d7f83320b617b707d6f374db53cc53a3e345e0418b4dff419c00e&w=1060" className="fondoImagen" alt="imagen" />
        <h2> Soy el cuerpo del HTML</h2>
        

    </>
    )
}







const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
    root.render(
        <>
            <Encabezado/>
            <Cuerpo/>
        </>
    );