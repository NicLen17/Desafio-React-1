import './Card.css';

function Card(props) {
    return (
        <div className="container py-5">
            <div className="card" style={{ width: "18rem" }}>
                <div className="imgcard">
                <img
                    src={props.imagen}
                    className="card-img-top"
                    alt="..."
                /></div>
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">
                        {props.descripcion}
                    </p>
                    <div className="nota">
                        <h5>Nota: {props.nota}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
