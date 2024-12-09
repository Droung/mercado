import '../css/bubble.css';
import '../css/contenedor.css'
import Capventa from '../components/Capventa';
export default function Vend(){

    return(
        <>
            <div className='Wrapper'>
                <div className='Contenedor'>
                    <link href="/createarticulo">
                    <button className='addButton'>+</button>
                    </link>
                    
                    <Capventa/>
                    <Capventa/>
                    <Capventa/>
                    <Capventa/>

                </div>
            </div>

        
        
        </>

    );
}
