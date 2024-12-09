import './css/bubble.css';
import ImageBox from './components/Imagebox';
import Carousel from './components/Carousel';

export default function Home() {
  return (
    <>
        <div className="image-container" >
          
          <ImageBox src="/img/one.jpg" alt="No found"/>
          <ImageBox src="/img/luffy.jpg"  alt="No found"/>
          <ImageBox src="/img/da.jpg" alt="No found"/>
          <ImageBox src="/img/naruto.jpg" alt="No found"/>
          <ImageBox src="/img/bl.jpg" alt="No found"/>
          <ImageBox src="/img/pica.jpg" alt="No found"/>

        </div>

        <div className="image-container" >
          
          <ImageBox src="/img/jjk.jpg" alt="No found"/>
          <ImageBox src="/img/goku.jpg"  alt="No found"/>
          <ImageBox  src="/img/mha.jpg" alt="No found"/>
          <ImageBox src="/img/dr.jpg" alt="No found"/>
          <ImageBox src="/img/jojos.jpg" alt="No found"/>
          <ImageBox src="/img/sl.jpg" alt="No found"/>

        </div>

        <h1 className='title'>Relacionados</h1>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Carousel />
        </div>
              
    </>
  );
}