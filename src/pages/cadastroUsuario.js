import Menu from './menu.js';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/cusuario.css';
import '../css/index.css';
import React, { Component } from 'react';

const emptyfields = {
    email: '',
    password: '',
    nome: '',
    endereco: '',
    cidade: '',
    cep: ''
}

export default class User extends Component {

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
        fetch(apiUrl + apiV1 + '/USER/1.0/user', requestOptions)
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
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label className="details-form">Email</Form.Label>
                                        <Form.Control className="font-forms" type="email" placeholder="Informe o email" value={this.state.email} onChange={this.changeField.bind(this, 'email')} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label className="details-form">Password</Form.Label>
                                        <Form.Control className="font-forms" type="password" placeholder="Password" value={this.state.password} onChange={this.changeField.bind(this, 'password')} />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGridNome">
                                    <Form.Label className="details-form">Nome Completo</Form.Label>
                                    <Form.Control className="font-forms" placeholder="Informe o nome e o sobrenome" value={this.state.nome} onChange={this.changeField.bind(this, 'nome')} />
                                </Form.Group>

                                <Form.Group controlId="formGridendereco">
                                    <Form.Label className="details-form">Enreceço</Form.Label>
                                    <Form.Control className="font-forms" placeholder="Informe o endereço" value={this.state.endereco} onChange={this.changeField.bind(this, 'endereco')} />
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCidade">
                                        <Form.Label className="details-form">Cidade</Form.Label>
                                        <Form.Control className="font-forms" placeholder="Informe a cidade" value={this.state.cidade} onChange={this.changeField.bind(this, 'cidade')} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCep">
                                        <Form.Label className="details-form">CEP</Form.Label>
                                        <Form.Control className="font-forms" placeholder="Informe o CEP" value={this.state.cep} onChange={this.changeField.bind(this, 'cep')} />
                                    </Form.Group>
                                </Form.Row>
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
