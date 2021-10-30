import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import todosProdutos from '../dataBase'
import Produto from './Produto';
import bag from "../imagens/shopping-bag.png"
import Itemcarrinho from './ItemCarrinho';
import { useSelector } from 'react-redux';
import Header from './Header';
const Content = () => {
    const [abrirCarrinho, setAbrirCarrinho] = useState(false);
    const [valorTotal, setValorTotal] = useState(0);

    const arrayProdutos = useSelector(state => state.produtos)


    function valor(params) {
        var soma = 0
        for (let index = 0; index < arrayProdutos.length; index++) {
            soma += arrayProdutos[index].quantidadeProduto * arrayProdutos[index].valorProduto

        }
        setValorTotal(soma)
    }
    useEffect(() => {
        valor()
    }, [arrayProdutos, arrayProdutos.length]);



    return (
        <div>
            <Header></Header>

            <div className="content">

                <Container className={abrirCarrinho ? "efeitoEscurecer" : ""} >
                    <Row>
                        {todosProdutos.map((item, index) =>
                            <Col key={index} md={3}>
                                <Produto key={index} urlImg1={item.urlImg1} urlImg2={item.urlImg2} idProduto={item.idProduto} nomeProduto={item.nomeProduto} valorProduto={item.valorProduto} tamanhoProduto={item.tamanhoProduto}></Produto>
                            </Col>

                        )}

                    </Row>
                </Container>

                <div className="sidebar">
                    <a className="bag" onClick={() => setAbrirCarrinho(!abrirCarrinho)}>
                        {arrayProdutos.length !== 0 ? <small>{arrayProdutos.length}</small> : ''}
                        <img src={bag} alt="" />
                    </a>
                    <div className={abrirCarrinho ? "carrinho" : "carrinho-desativado"}>
                        <div className="frete">
                            {valorTotal > 200 ? <h5>Você ganhou frete grátis!</h5> : <h5>Faltam R$ {(200 - valorTotal).toFixed(2)} para o frete grátis</h5>}

                            <div className="barra">
                                <span>R$ 0,00</span> <div> <span className="barra-progresso-frete" style={{ width: `${((valorTotal / 200) * 100) > 100 ? 100 : ((valorTotal / 200) * 100)}%`, transition: '0.5s' }}></span> </div> <span>R$ 199,90</span>
                            </div>
                        </div>
                        <div className="item-carrinho">

                            {arrayProdutos.length != 0 ? arrayProdutos.map((item, index) =>
                                <Itemcarrinho key={index} urlImg1={item.urlImg1} urlImg2={item.urlImg2} indice={index} idProduto={item.idProduto} nomeProduto={item.nomeProduto} valorProduto={item.valorProduto} tamanhoProduto={item.tamanhoProduto}></Itemcarrinho>
                            ) : <h5 style={{ background: '#fff', padding: '20px 5px', textAlign: 'center' }}>NÃO EXISTEM ITENS NO SEU CARRINHO</h5>}
                        </div>
                        <div className="total-carrinho">
                            <div className="subtotal">
                                <span>subtotal</span>
                                <span>R$ {valorTotal.toFixed(2)}</span>
                            </div>
                            <div className="total">

                                <span>total</span>
                                <span>R$ {valorTotal.toFixed(2)} </span>
                            </div>
                            <div className="btn-finalizar-carrinho">
                                finalizar compra
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
