import "./Produtos.css";

function Produtos({ discont }) {
  let valorDoProduto = 1.939;
  let desconto = 10;
  let valorComDesconto = valorDoProduto * (1 - desconto / 100);

  return (
    <div className="box-product">
      <img src="src\assets\switch.webp" alt="" />
      <ul>
        <li>
          <a
            target="blank"
            href="https://www.amazon.com.br/Console-Nintendo-Switch-Digital-Assinatura/dp/B0CJCM7ZSJ/ref=asc_df_B0CJCM7ZSJ/?tag=googleshopp00-20&linkCode=df0&hvadid=648482421100&hvpos=&hvnetw=g&hvrand=6103876621789817004&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031985&hvtargid=pla-2300383331247&psc=1&mcid=d1e602f658843528bfc547e07e7a3611"
          >
            Nintendo, Videogame, Nintendo Switch Console Joy-Con, Mario Kart 8
            Digital + 3 Meses Assinatura Nintendo Switch Online
          </a>
        </li>
       
        {discont  ? (
          <>
            <li className={discont ? "discont" : ""}>Desconto: {desconto}%</li>
            <li className="value-produtc">De: {valorDoProduto} </li>
            <li className="price">R$ {valorComDesconto.toFixed(3)}</li>
          </>
        ):<li className="value-produtc">R$: {valorDoProduto} </li>}
       
      </ul>
    </div>
  );
}

export default Produtos;
