import '../css/bubble.css'
import '../css/carrito.css'
import Link from 'next/link';
import BoxProduc from '../components/Boxproduc';
import BoxDoc from '../components/BoxDoc';
export default function Carrito(){
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
        
        <Link href="/profile/address">
        <button className="agregar">Agregar</button>
        </Link>
        


        <br />
        <br />
            
        </>
        
    );
};