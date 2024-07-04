import Media from "./components/Media";
import Produtos from "./components/Produtos";

function App() {
  const discont = true;

  const aluno = {
    nome: "João Silva",
    notas: {
      matematica: 10,
      portugues: 10,
      historia: 5,
    },
  };

  const calcularMedia = (notas) => {
    const soma = notas.matematica + notas.portugues + notas.historia;
    return soma / 3;
  };

  const media = calcularMedia(aluno.notas);

  return (
    <>
      <div className="App">
        <Media
          nome={aluno.nome}
          matematica={aluno.notas.matematica}
          portugues={aluno.notas.portugues}
          historia={aluno.notas.historia}
          media={media}
        />
      </div>
      <div className="container-product">
        <Produtos discont={true} />
        <Produtos discont={false} />
      </div>
    </>
  );
}

export default App;
