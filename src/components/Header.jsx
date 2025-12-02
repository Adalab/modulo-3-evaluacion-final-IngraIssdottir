import logoHeader from "../images/logo-header.png"

function Header () {
    return(
        <header className="header">
        <img className="hp_logo" src={logoHeader} alt="Logo de Harry Potter" />
      </header>
    )
};

export default Header