import '../css/produc.css';
import '../css/bubble.css'
import Carousel from '../components/Carousel';
export default function Producto(){
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

            <div className="Contenedor">

                
                <h1 className='Titulo'></h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Carousel />
                </div>

                
            </div>

            
        
        </>
    );
};