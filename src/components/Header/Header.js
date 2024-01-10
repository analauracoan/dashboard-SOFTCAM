import './Header.css'

export const Header = ({ municipio }) => {
    return (
        <header className='cabecalho'>
            <h1>
                Câmara municipal de {municipio}
            </h1>
        </header>
    )
}