import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
const Header = () => {
    const [ativar, setAtivar] = useState([{ masculino: false, feminino: false, kids: false, acessorios: false }]);

    function ativarMenu(param) {
        if (param === 0) {
            setAtivar({ ...ativar, masculino: !ativar.masculino })
        }
        if (param === 1) {
            setAtivar({ ...ativar, feminino: !ativar.feminino })
        }
        if (param === 2) {
            setAtivar({ ...ativar, kids: !ativar.kids })
        }
        if (param === 3) {
            setAtivar({ ...ativar, acessorios: !ativar.acessorios })
        }
    }


    return (
        <header>
            <Container fluid>
                <Row>
                    <Col md={2}> <h1 style={{fontWeight:'700', textAlign:'center',fontSize:'38px'}} >Baw Clothing</h1></Col>
                    <Col md={1}  onMouseOver={() => ativarMenu(0)} onMouseOut={() => ativarMenu(0)} >
                        <a href="" className="link-menu">Masculino</a>
                        <span className={ativar.masculino ? 'border-link' : ''} ></span>
                        <div onMouseOut={() => ativarMenu(0)} className={ativar.masculino ? "bloco-menu-ativo" : "bloco-menu-inativo"}  >
                            <ul className="">
                                <li><a href=""> Lançamentos</a></li>
                                <li><a href="">Camisetas</a></li>
                                <li><a href="">Shorts e Calças</a></li>

                            </ul>
                            <ul className="">
                                <li><a href=""> Lançamentos</a></li>
                                <li><a href="">Camisetas</a></li>
                                <li><a href="">Shorts e Calças</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={1} onMouseOut={() => ativarMenu(1)} onMouseOver={() => ativarMenu(1)}>
                        <a href="" className="link-menu"  >Feminino</a>
                        <span className={ativar.feminino ? 'border-link' : ''} ></span>
                        <div onMouseOut={() => ativarMenu(1)} className={ativar.feminino ? "bloco-menu-ativo" : "bloco-menu-inativo"}  >
                            <ul className="">
                                <li><a href=""> Lançamentos</a></li>
                                <li><a href="">Camisetas</a></li>
                                <li><a href="">Shorts e Calças</a></li>
                            </ul>
                            <ul className="">
                                <li><a href=""> Lançamentos</a></li>
                                <li><a href="">Camisetas</a></li>
                                <li><a href="">Shorts e Calças</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={1} onMouseOut={() => ativarMenu(2)} onMouseOver={() => ativarMenu(2)}>
                        <a href="" className="link-menu"  >Kids</a>
                        <span className={ativar.kids ? 'border-link' : ''} ></span>
                        <div onMouseOut={() => ativarMenu(2)} className={ativar.kids ? "bloco-menu-ativo" : "bloco-menu-inativo"}  >
                            <ul className="">
                                <li><a href=""> Lançamentos</a></li>
                                <li><a href="">Camisetas</a></li>
                                <li><a href="">Shorts e Calças</a></li>
                            </ul>
                            <ul className="">
                                <li><a href=""> Lançamentos</a></li>
                                <li><a href="">Camisetas</a></li>
                                <li><a href="">Shorts e Calças</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={1} onMouseOut={() => ativarMenu(3)} onMouseOver={() => ativarMenu(3)}>
                        <a href="" className="link-menu"  >Acessorios</a>
                        <span className={ativar.acessorios ? 'border-link' : ''} ></span>
                        <div onMouseOut={() => ativarMenu(3)} className={ativar.acessorios ? "bloco-menu-ativo" : "bloco-menu-inativo"}  >
                            <ul className="">
                                <li><a href=""> Lançamentos</a></li>
                                <li><a href="">Camisetas</a></li>
                                <li><a href="">Shorts e Calças</a></li>
                            </ul>
                            <ul className="">
                                <li><a href=""> Lançamentos</a></li>
                                <li><a href="">Camisetas</a></li>
                                <li><a href="">Shorts e Calças</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>

        </header>
    );
}

export default Header;
