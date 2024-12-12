import './css/bubble.css';
import ImageBox from './components/Imagebox';
import Carousel from './components/Carousel';

export default function Home() {
  return (
    <>
      <div className="image-container">
        <ImageBox src="/img/one.jpg" alt="Not found"/>
        <ImageBox src="/img/luffy.jpg" alt="Not found"/>
        <ImageBox src="/img/da.jpg" alt="Not found"/>
        <ImageBox src="/img/naruto.jpg" alt="Not found"/>
        <ImageBox src="/img/bl.jpg" alt="Not found"/>
        <ImageBox src="/img/pica.jpg" alt="Not found"/>
      </div>

      <div className="image-container">
        <ImageBox src="/img/jjk.jpg" alt="Not found"/>
        <ImageBox src="/img/goku.jpg" alt="Not found"/>
        <ImageBox src="/img/mha.jpg" alt="Not found"/>
        <ImageBox src="/img/dr.jpg" alt="Not found"/>
        <ImageBox src="/img/jojos.jpg" alt="Not found"/>
        <ImageBox src="/img/sl.jpg" alt="Not found"/>
      </div>

      <h1 className='title'>Relacionados</h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Carousel />
      </div>
    </>
  );
}
