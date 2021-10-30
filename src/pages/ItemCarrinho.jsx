import React, { useState } from 'react';
import produtoDois from "../imagens/produto-dois.png"
import excluir from "../imagens/excluir.png"
import { useSelector, useDispatch } from 'react-redux';
const Itemcarrinho = (props) => {

    const arrayProdutos = useSelector(state => state.produtos)
    // Estados para as informações do produto
    const [idProduto, setId] = useState(props.idProduto);
    const [valorProduto, setValorProduto] = useState(props.valorProduto);
    const [nomeProduto, setNomeProduto] = useState(props.nomeProduto);
    const [tamanhoProduto, setTamanhoProduto] = useState(props.tamanhoProduto);
    const [quantidadeProduto, setQuantidadeProduto] = useState(0);
    //************************* */


    const found = arrayProdutos.find(element => element.idProduto === 3)
    const dispatch = useDispatch()

    function addCarrinho(parametro) {
         
        var objeto = { indice:props.indice,idProduto }
        if (parametro === 0) {
            dispatch({ type: 'ADD_MENOS_UM', item: objeto })
        } else if(parametro===1) {
            dispatch({ type: 'ADD_MAIS_UM', item: objeto })
        }
    }

    function excluirItemCarrinho(params) {
        var objeto = { idProduto:props.idProduto }
        dispatch({ type: 'EXCLUIR_ITEM', item: objeto })
    }

    console.log(props.urlImg2)
    
    return (
        <div className="item">
            <div>
                <img src={props.urlImg2} style={{ width: "100%" }} alt="" />
            </div>
            <div className="item-info-carrinho">
                <div className="titulo-item">
                    {props.nomeProduto}
                </div>
                <div className="preco-item-carrinho">
                    <span>R$ {props.valorProduto}</span>
                    <img onClick={()=> excluirItemCarrinho()} src={excluir} alt="" />
                </div>
                <div className="add-item">
                     <span style={{opacity:`${arrayProdutos[props.indice].quantidadeProduto===1? 0.3: 1}`}}  onClick={() => arrayProdutos[props.indice].quantidadeProduto=== 1? addCarrinho() : addCarrinho(0)}>-</span> <span>{arrayProdutos[props.indice].quantidadeProduto ? arrayProdutos[props.indice].quantidadeProduto : 1}</span> <span onClick={() => addCarrinho(1)}>+</span>
                </div>
            </div>
        </div>
    );
}

export default Itemcarrinho;
