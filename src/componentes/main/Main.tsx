import { useEffect, useState } from "react";
import Filme from "./../filme/Filme";
import axios from "axios";

import "./Main.css";
type FilmeType = {
  id: number;
  titulo: string;
  sinopse: string;
  foto: string;
};

export default function Main() {
  //let textodigitado = 'Barbie'
  //Hooks são funções do React que ajudam a gente a fazer tarefas
  //específicas
  const [texto, setTexto] = useState("");
  const [filmes, setFilmes] = useState<FilmeType[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/filmes").then((retorno) => {
      setFilmes(retorno.data);
    });
  },[]);

  

  //O parâmetro "e" da minha função será o meu evento que ocorreu
  function TrataTexto(e: React.ChangeEvent<HTMLInputElement>) {
    //console.log(e.target.value)
    //Como eu faço para mudar o texto para "TERE"
    setTexto(e.target.value);
  }
  return (
    <>
      <div className="campo_pesquisa">
        <p>Busque um filme</p>
        <input
          type="text"
          className="botao_pesquisa"
          placeholder="Pesquise um Filme"
          onChange={TrataTexto}
        />
        {texto && <p>Resultados Para: {texto} </p>}
      </div>
      <main className="content-main">
        {/* 
                    Use algo do vetor para tentar criar os filmes 
                */}
        {filmes
          .filter((filme) => filme.titulo.toLowerCase().includes(texto))
          .map((filme) => (
            <Filme
              key={filme.id}
              sinopse={filme.sinopse}
              titulo={filme.titulo}
              foto={filme.foto}
            />
          ))}
      </main>
    </>
  );
}
