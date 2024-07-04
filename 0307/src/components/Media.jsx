import "./Media.css";

function Media({ nome, matematica, portugues, historia, media }) {
  const mediaClasse = media >= 7 ? "aprovado" : "reprovado";
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome do Aluno</th>
            <th>Matemática</th>
            <th>Português</th>
            <th>História</th>
            <th>Média Final</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{nome}</td>
            <td>{matematica}</td>
            <td>{portugues}</td>
            <td>{historia}</td>
            <td className={mediaClasse}>{media.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Media;
