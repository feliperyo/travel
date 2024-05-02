import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md'

const Navbar = () => {
    return (
        <section className='navBarSection'>
            <header className="header flex">

                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><MdOutlineTravelExplore className='icon' />Travel.</h1>
                    </a>
                </div>

                <div className="navBar">
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Pacotes</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Loja</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Sobre Nós</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Páginas</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Novidades</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Contato</a>
                        </li>

                        <button className='btn'>
                            <a href="#">Agendar</a>
                        </button>
                    </ul>
                </div>

            </header>
        </section>
    )
}

export default Navbar
