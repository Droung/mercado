import '../css/bubble.css';
import '../css/createarticulo.css';
export default function Profile(){
    return(
        <>
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
                <select className='inputTextProduct' id="categoriaProducto" name="categoriaProducto" required>
                    <option value="Figura">Figura</option>
                    <option value="Llaveros">Llaveros</option>
                    <option value="Peluches">Peluches</option>
                    <option value="Otros">Otros</option>
                </select>
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
</div>
        </>
    );
}