import './Card.css'

const Card = (props) => {

    return (
        <div className='Card' >
            <p>Hola {props.data.nombre}!! <br /> Sabemos que tú color favorito es el {props.data.color}</p>
            
        </div>
    )
}

export default Card;