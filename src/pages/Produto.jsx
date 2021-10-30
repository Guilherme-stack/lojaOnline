import React, { useState, useEffect } from "react";
import produto from "../imagens/produto.png";
import produtoDois from "../imagens/produto-dois.png";
import { useSelector, useDispatch } from "react-redux";
const Produto = (props) => {
  // Estados para as informações do produto
  const [urlImg1, setUrlImg1] = useState(props.urlImg1);
  const [urlImg2, setUrlImg2] = useState(props.urlImg2);
  const [idProduto, setIdProduto] = useState(props.idProduto);
  const [valorProduto, setValorProduto] = useState(props.valorProduto);
  const [nomeProduto, setNomeProduto] = useState(props.nomeProduto);
  const [tamanhoProduto, setTamanhoProduto] = useState(props.tamanhoProduto);
  const [quantidadeProduto, setQuantidadeProduto] = useState(
    props.quantidadeProduto ? props.quantidadeProduto : 1
  );
  //************************* */

  const [hover, setHover] = useState();
  const [eventAdd, setEventAdd] = useState(false);
  const dispatch = useDispatch();

  const teste = useSelector((state) => state.produtos);
  function addItemCarrinho(params) {
    var objeto = {
      idProduto,
      nomeProduto,
      valorProduto,
      tamanhoProduto,
      quantidadeProduto,
      urlImg1,
      urlImg2,
    };
    var verifica = false;
    teste.map((item, index) =>
      item.idProduto === idProduto ? (verifica = true) : item
    );

    if (verifica) {
      var existe;
      teste.map((item, index) =>
        item.idProduto === idProduto ? (existe = { indice: index }) : item
      );

      console.log(existe);
      dispatch({ type: "ADD_MAIS_UM", item: existe });
    } else {
      dispatch({ type: "ADD_CARRINHO", item: objeto });
    }
  }

  return (
    <div className="produto">
      <div
        className="imagem"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <img
          src={props.urlImg1}
          alt=""
          className={hover ? "efeito-hover-desativado" : "efeito-hover"}
        />
        <img
          src={props.urlImg2}
          alt=""
          className={hover ? "efeito-hover" : "efeito-hover-desativado"}
        />
        <div className={hover ? "comprar-thumb" : "efeito-hover-desativado"}>
          <div className="tamanho-thumb">
            {props.tamanhoProduto.map((item, index) => (
              <span key={index} style={{ marginRight: "5px" }}>
                {item}
              </span>
            ))}
          </div>
          <div className="btn-comprar-thumb">
            <a onClick={() => addItemCarrinho()}>
              <h4>comprar</h4>
            </a>
          </div>
        </div>
      </div>
      <div className="info-produto-thumb">
        <h5>{props.nomeProduto}</h5>
        <b>R$ {props.valorProduto.toFixed(2)}</b>
      </div>
    </div>
  );
};

export default Produto;
