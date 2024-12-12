import '../css/bubble.css';
import '../css/contenedor.css';
import Capventa from '../components/Capventa';
import Link from 'next/link';  // Import Link from next/link

export default function Vend() {
    return (
        <>
            <div className='Wrapper'>
                <div className='Contenedor'>
                    {/* Use Link component for navigation */}
                    <Link href="/createarticulo">
                        <button className='addButton'>+</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
