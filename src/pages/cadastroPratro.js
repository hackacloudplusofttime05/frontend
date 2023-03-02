import Menu from './menu.js';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/cprato.css';
import '../css/index.css';
import React, { Component } from 'react';
import { apiUrl, apiV1 } from '../global.js';

const emptyfields = {
    nome: '',
    descricao: '',
    restaurante: '',
    tempoParaPreparo: '',
    acompanhamento: '',
    preco: '',
    url: ''
}

export default class Food extends Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({}, emptyfields)
    }

    changeField(field, event) {
        let _filed = event.target.value;
        this.setState(prevState => {
            let nextState = Object.assign({}, prevState);
            nextState[field] = _filed;
            return nextState;
        })
    }

    submitForm() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch(apiUrl + apiV1 + '/FOOD/1.0/food', requestOptions)
            .then(response => response.json())
            .then(data => {
                alert(JSON.stringify(data))
                this.setState(Object.assign({}, emptyfields))
            });
    }

    render() {
        return (
            <div className="center">
                <Menu />
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit={this.submitForm.bind(this)}>
                                <Form.Group controlId="formGridNome">
                                    <Form.Label className="details-form">Nome do Prato</Form.Label>
                                    <Form.Control className="font-forms" type="text" placeholder="Informe o email" value={this.state.nome} onChange={this.changeField.bind(this, 'nome')} />
                                </Form.Group>

                                <Form.Group controlId="formGridDescricao">
                                    <Form.Label className="details-form">Descrição do prato</Form.Label>
                                    <Form.Control as="textarea" rows={3} className="font-forms" placeholder="Informe o descritivo do prato" value={this.state.descricao} onChange={this.changeField.bind(this, 'descricao')} />
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridendereco">
                                        <Form.Label className="details-form">Restaurante</Form.Label>
                                        <Form.Control as="select" className="font-forms select-forms" placeholder="Informe o endereço" value={this.state.restaurante} onChange={this.changeField.bind(this, 'restaurante')} >
                                            <option>Restaurante 1</option>
                                            <option>Restaurante 2</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPreco">
                                        <Form.Label className="details-form">Preço do prato</Form.Label>
                                        <Form.Control className="font-forms" placeholder="Informe o preço do prato" value={this.state.preco} onChange={this.changeField.bind(this, 'preco')} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridtempoParaPreparo">
                                        <Form.Label className="details-form">Tempo para preparo</Form.Label>
                                        <Form.Control className="font-forms" placeholder="Informe o tempo medio para preparar o pedido" value={this.state.tempoParaPreparo} onChange={this.changeField.bind(this, 'tempoParaPreparo')} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridAcompanhamento">
                                        <Form.Label className="details-form">Acompanhamento</Form.Label>
                                        <Form.Control className="font-forms select-forms" as="select" placeholder="Selecione o acompanhamento" value={this.state.acompanhamento} onChange={this.changeField.bind(this, 'acompanhamento')}  >
                                            <option>Acompanhamento 1</option>
                                            <option>Acompanhamento 2</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="formGridNome">
                                    <Form.Label className="details-form">Imagem do prato (URL)</Form.Label>
                                    <Form.Control className="font-forms" type="text" placeholder="Informe a url da imagem (dica use o bucket)" value={this.state.url} onChange={this.changeField.bind(this, 'url')} />
                                </Form.Group>
                                <Button variant="danger" type="submit">
                                    Cadastrar
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
