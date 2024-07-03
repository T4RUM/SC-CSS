import "./BlogContent.css";

const linkImagem = "https://picsum.photos/200";
const nomeAutor = "Wesley Murat";

function BlogContent() {
  return (
    <div className="container-box">
      <h1>Titulo do post</h1>
      <div className="container-content">
        <img className="img-post" src={linkImagem} alt="Imagem aleatoria" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
          eos?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
          eos?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
          eos?
        </p>
      </div>
    </div>
  );
}

export default BlogContent;
