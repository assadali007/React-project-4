import airbnb from '../images/airbnb-logo.png'



function Navbar() {
    return (
        <nav>
          <img className="nav--logo" src={airbnb} />
        </nav>
    )
}
export default Navbar