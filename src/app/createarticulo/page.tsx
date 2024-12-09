import '../css/bubble.css';
import '../css/createarticulo.css';
export default function Profile(){
    return(
        <>

        <div className="bubbles"> 
          <span style={{'--i':11}as React.CSSProperties}></span>
          <span style={{'--i':12}as React.CSSProperties}></span>
          <span style={{'--i':24}as React.CSSProperties}></span>
          <span style={{'--i':10}as React.CSSProperties}></span>
          <span style={{'--i':14}as React.CSSProperties}></span>
          <span style={{'--i':23}as React.CSSProperties}></span>
          <span style={{'--i':18}as React.CSSProperties}></span>
          <span style={{'--i':16}as React.CSSProperties}></span>
          <span style={{'--i':19}as React.CSSProperties}></span>
          <span style={{'--i':20}as React.CSSProperties}></span>
          <span style={{'--i':22}as React.CSSProperties}></span>
          <span style={{'--i':25}as React.CSSProperties}></span> 
          <span style={{'--i':18}as React.CSSProperties}></span>
          <span style={{'--i':21}as React.CSSProperties}></span>
          <span style={{'--i':15}as React.CSSProperties}></span>
          <span style={{'--i':26}as React.CSSProperties}></span>
          <span style={{'--i':17}as React.CSSProperties}></span>
          <span style={{'--i':13}as React.CSSProperties}></span>
          <span style={{'--i':28}as React.CSSProperties}></span>
          <span style={{'--i':10}as React.CSSProperties}></span>
          <span style={{'--i':14}as React.CSSProperties}></span>
          <span style={{'--i':23}as React.CSSProperties}></span>
          <span style={{'--i':11}as React.CSSProperties}></span>
          <span style={{'--i':12}as React.CSSProperties}></span>
          <span style={{'--i':24}as React.CSSProperties}></span>
          <span style={{'--i':15}as React.CSSProperties}></span>
          <span style={{'--i':12}as React.CSSProperties}></span>
          <span style={{'--i':24}as React.CSSProperties}></span>
          <span style={{'--i':15}as React.CSSProperties}></span>
        </div>

            <br />
            <div id='main-container-address'>
    <form>
        <div className='product-container'>
            <div>
                <label htmlFor="nombreProducto">Nombre del producto:</label><br />
                <input placeholder='Ej. Camiseta Roja' className='inputTextProduct' type="text" id="nombreProducto" name="nombreProducto" required />
            </div>

            <div>
                <label htmlFor="costoProducto">Costo del producto:</label><br />
                <input placeholder='Ej. 250' className='inputTextProduct' type="number" id="costoProducto" name="costoProducto" required />
            </div>

            <div>
                <label htmlFor="cantidadProducto">Cantidad del producto:</label><br />
                <input placeholder='Ej. 10' className='inputTextProduct' type="number" id="cantidadProducto" name="cantidadProducto" required />
            </div>

            <div>
                <label htmlFor="categoriaProducto">Categoría:</label><br />
                <input placeholder='Ej. Ropa, Electrónica' className='inputTextProduct' type="text" id="categoriaProducto" name="categoriaProducto" required />
            </div>

            <div>
                <label htmlFor="descripcionProducto">Descripción:</label><br />
                <textarea placeholder='Descripción del producto' className='inputTextProduct' id="descripcionProducto" name="descripcionProducto" rows="3" required></textarea>
            </div>

            <div>
                <label htmlFor="imagenProducto">Subir imagen:</label><br />
                <input type="file" id="imagenProducto" name="imagenProducto" accept="image/*" />
            </div>

            <div className='buttonDistribution'>
                <a href="/vend"  >
                    <button className='continuar' type="button">Regresar</button>
                </a>

                <a href="/vend">
                <button className='continuar' type="submit">Guardar</button>
                </a>
            
            </div>
        </div>
    </form>
</div>S
        </>
    );
}