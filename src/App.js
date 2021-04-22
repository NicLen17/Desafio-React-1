import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import NavReact from "./components/NavReact";
import Carro from "./components/Carro"
import './components/Card.css'
import { useState } from "react";


function App() {
  const [section, setsection] = useState('Cards')

  const articulos = [
    {
      image:
        "https://tvazteca.brightspotcdn.com/dims4/default/f8a22f9/2147483647/strip/true/crop/1382x2048+0+0/resize/968x1434!/format/jpg/quality/80/?url=https%3A%2F%2Ftvazteca.brightspotcdn.com%2Fa1%2Ffc%2Fa846f8114348a9688a594476fa63%2Festreno-pelicula-2021.jpg",
      titulo: "Black Widow",
      descripcion: "Al nacer, la Viuda Negra, también conocida como Natasha Romanova, se entrega a la KGB para convertirse en su agente definitivo. Cuando la URSS se separa, el gobierno intenta matarla mientras la acción se traslada a la actual Nueva York.",
      nota:"3.00"
    },
    {
      image:
        "https://www.dodmagazine.es/wp-content/uploads/2021/03/the-unholy-2021-pelicula-terror.jpg",
      titulo: "The Unholy",
      descripcion: "The Unholy es una película de terror sobrenatural estadounidense de 2021 escrita, producida y dirigida por Evan Spiliotopoulos, basada en la novela Shrine de 1983 de James Herbert.",
      nota:"5.00"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStHA-JQQ5VppsYHISFgWlfxcV7yCoba2R8UQ&usqp=CAU",
      titulo: "Mortal Kombat",
      descripcion: "Mortal Kombat es una película de fantasía de artes marciales estadounidense de 2021 dirigida por Simon McQuoid, en su debut como director, a partir de un guion de Greg Russo y Dave Callaham y una historia de Oren Uziel y Russo.",
      nota:"4.50"
    },
  ];
  return (
    <div className="">
      
      <NavReact setsection={setsection} />

      {section === 'Carro' && <Carro /> }

      {section === 'Cards' && (<div className="container d-flex">
        {articulos.map((articulo) => (
          <Card
            imagen={articulo.image}
            titulo={articulo.titulo}
            descripcion={articulo.descripcion}
            nota={articulo.nota}
          />
        ))}
      </div>)}

    </div>
  );
}


export default App;
