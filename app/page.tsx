import Header from './components/Header';
import Slider from './components/Slider';

export default function Home() {
  return (
    <div className='wrapper'>
      <Header />

      <main className='main'>
        <section className='section-slider container'>
          <Slider />
        </section>
      </main>      
    </div>
  )
}
