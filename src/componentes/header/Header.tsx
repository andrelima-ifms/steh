import './Header.css'
import LinkNav from './../linknav/LinkNav'
function Header(){
    return(
        <header>
            <div className='my-title'>
                <h1>SL8</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <LinkNav url="/" texto='Home'/>
                    </li>
                    <li>
                        <LinkNav url="/notícias" texto='Notícias'/>
                    </li>
                    <li>
                        <LinkNav url="/sobre" texto='Sobre'/>
                    </li>
                    <li>
                        <LinkNav url="/contato" texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header