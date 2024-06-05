function Encabezado(){
    return ( <>
        <header className='header'>
        <h1 className='title'>GamerSeats</h1>
    <nav className='nav'>
        <ul>
        <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>
        </header>
    
    </>
    )
}
function Cuerpo(){
    return ( <>
        <aside className="contenedorImagen">
  <img src="https://img.freepik.com/vector-gratis/fondo-acuarela-abstracta-acuarela-pintada-mano_23-2149018547.jpg" className="fondoImagen" alt="imagen" />
  <section className="textoSobreImagen">
    <h1>Bienvenidos a GamerSeats</h1>
    <p>Las mejores sillas gamer para tu comodidad y rendimiento</p>
    <button className="botonTienda">Compra en nuestra tienda</button>
  </section>
</aside>

        <h2 className='prd'>Productos</h2>
        <article className="article">
        <section className="container">
        <section className="card">
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRVA4b318Ux4Wran48Z9gL1KWyuaSu5wFtS_DOivjURaVm_KoBtue_b9-e3n0xtwAlPBkDq_AHmp8owFzzjXnXO1ujF282XZCtVMAEYQTsu&usqp=CAE" alt="Producto 1" className="imagen-producto"></img>
            <h3 className="nombre">Producto 1</h3>
            <p className="descripcion">Es un artículo de alta calidad.</p>
            <p className="precio">$2.051.846</p>
        </section>
        <section className="card">
            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQY3gwQLjFLkHRILmyrxycApnJ9a-dBMxBMaRYy7yInTAqP2dr_HjsXc8XK9Gq6NsGTErLVSUpaHDekwENFRoCe3kRROP6tAxWUXFWHJC54&usqp=CAE" alt="Producto 2" className="imagen-producto"></img>
            <h3 className="nombre">Producto 2</h3>
            <p className="descripcion">Ideal para cualquier ocasión.</p>
            <p className="precio">$1.869.991</p>
        </section>
        <section className="card">
            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSbJIdD_UIxJqcp-R2KMwJw-qWjZHoE0RSy-z_PgD8vUonZqOzSaBav8AGX4dx_YrjdmFosbh1AsVC37wN5-S48hYrAAO29V2KMyc_JisqBagezwO4zSS8T&usqp=CAE" alt="Producto 3" className="imagen-producto"></img>
            <h3 className="nombre">Producto 3</h3>
            <p className="descripcion">Calidad y buen precio.</p>
            <p className="precio">$308.224</p>
        </section>
        <section className="card">
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQEkNGu0sXxjBjf_HibFiE5qou9MJlkMqWMfIVcVL1qoBcrpChg4sbyghp14YeoYZ08Edy5QQA5tKAzeGI1BPAqSB4x9cmseCQPPsTP1os&usqp=CAE" alt="Producto 4" className="imagen-producto"></img>
            <h3 className="nombre">Producto 4</h3>
            <p className="descripcion">Es un artículo de alta calidad.</p>
            <p className="precio">$1.652.274</p>
        </section>
        <section className="card">
            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS22kPQUQl8s7bBHZ4PeIQsnKXy6Kvrh48UAB2DiVXPYn1c4mgWrJ5RP2EvdbHxm5I6I6t8JgBH0M3nSvEdF_iB9Jr4GPDgGgTiWTD3yepH0jfSVJFAYOA&usqp=CAE" alt="Producto 5" className="imagen-producto"></img>
            <h3 className="nombre">Producto 5</h3>
            <p className="descripcion">Ideal para cualquier ocasión.</p>
            <p className="precio">$419.900</p>
        </section>
        <section className="card">
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRvph36cGhjsLTMYX5M4ZgcjTFPTKr9AdywEZ52P887_BYhKe6XUBkbbwBp-loAUTKJJvnPfY3Y1MWXkJulnpN30VyYDoRLm77XnDDT2FTmxfnqsfgQ22T9vg&usqp=CAE" alt="Producto 6" className="imagen-producto"></img>
            <h3 className="nombre">Producto 6</h3>
            <p className="descripcion">Calidad y buen precio.</p>
            <p className="precio">$542.900</p>
        </section>
        </section>
        </article>
    </>
    )
}
function Footer(){
    return (<>
        <footer class="footer">
        <section class="footer-container">
        <section class="footer-section contact-info">
            <h4>Contacto</h4>
            <p>Email: espinalsolarte7@gmail.com.com</p>
            <p>Teléfono: 3237083100</p>
            <p>Dirección: Mi casa jeje</p>
        </section>
        <section class="footer-section quick-links">
            <h4>Enlaces</h4>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#products">Acerca</a></li>
                <li><a href="#about">Producto</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </section>
        <section class="footer-section social-media">
            <h4>Síguenos</h4>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/256/124/124010.png" alt="Facebook" class="social-icono"></img></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/256/3938/3938028.png" alt="Twitter" class="social-icono"></img></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/256/1409/1409946.png" alt="Instagram" class="social-icono"></img></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/256/174/174883.png" alt="YouTube" class="social-icono"></img></a>
        </section>
        </section>
            <aside class="footer-boton">
                <p>@2024 Sillas Gamer. Todos los derechos reservados.</p>
            </aside>
        </footer>
    </>
    )
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
    root.render(
        <>
            <Encabezado/>
            <Cuerpo/>
            <Footer/>
        </>
    );