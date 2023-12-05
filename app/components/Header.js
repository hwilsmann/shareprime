import '../../styles/header.css'

import Image from 'next/image';

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <a className='anchor -logo' href="/">
          <picture className='picture'>
            <Image
              alt='SharePrime'
              src='/images/logo.png'
              width={55}
              height={58}
              priority
            />
          </picture>
        </a>

        <nav className='nav'>
          <a className='anchor' href='#slider'>Slider</a>
          <a className='anchor' href='#register'>Cadastro</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
