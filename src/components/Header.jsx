import logoImg from '../../public/logo.jpg';

const Header = () => {
  return (
    <div id='main-header'>
      <h1 id='title'>
        <img src={logoImg} alt='logo' />
        <p>React Food</p>
      </h1>
      <button className='text-button'>Cart(3)</button>
    </div>
  );
};

export default Header;
