import './Header.css'
export const Header = ({nombre}) => {
    return (
        <div className="cabeza">
            <div>Portafolio</div>
            <h1>{nombre}</h1>
            <hr />
        </div>
    )
  }
  
