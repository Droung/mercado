import '../css/bubble.css'
import '../css/carrito.css'
import Link from 'next/link';
import BoxProduc from '../components/Boxproduc';
import BoxDoc from '../components/BoxDoc';
export default function Carrito(){
    return(
        <>      
        <div className="main-container">
            
            <div className="content">
                <h1 className="Titulo">Producto</h1>
                <div className="Bloque">
                    <BoxProduc />
                    <BoxProduc />
                </div>
            </div>
            
            <div className="details-container">
                <h1 className="Titulo2">Resumen de Compra</h1>

                <aside>
                    <div className="col-right">
                        <div className="amount">
                            <p><strong>Pago Total: </strong>$3819</p>
                        </div>
                        <div className="free">
                            <p><strong>Envío: </strong>Gratis</p>
                        </div>
                        <button className="continuar">Continuar</button>
                    </div>
                </aside>                
            
            </div>
        </div>


        <h1 className='Titulo'>Domicilio</h1>
        
        <div className='Bloque'>
            <BoxDoc/>
            <BoxDoc/>
        </div>
        
        <Link href="./address">
        <button className="agregar">Agregar</button>
        </Link>
        


        <br />
        <br />
            
        </>
        
    );
};