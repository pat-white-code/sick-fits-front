import Nav from './Nav';

const Header = () => 
  (
    <div>
      <div className="bar">
        <a>Sick Fits</a>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>search</p>
      </div>
      <div>Cart</div>
    </div>
  )


export default Header;