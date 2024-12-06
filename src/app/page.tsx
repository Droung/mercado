import './css/bubble.css';
import ImageBox from './components/Imagebox';
import Carousel from './components/Carousel';

export default function Home() {
  return (
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