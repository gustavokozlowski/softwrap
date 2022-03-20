import React from 'react';
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FormCliente({ idade, setIdade}) {
  return (
    <>  
      <div>
        <h1>Formulário</h1>
      </div>
      <div>
        <FloatingLabel controlId="floatingInput" label="Nome" className="mb-3">
          <Form.Control type="text" placeholder="Nome" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingIdade" label="Idade" className="mb-3">
          <Form.Control type="number" placeholder="Idade" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingCpf" label="CPF" className="mb-3">
          <Form.Control type="number" placeholder="CPF" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEstadoCivil" label="Estado Civil" className="mb-3">
          <Form.Control type="text" placeholder="Estado Civil" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingCidade" label="Cidade" className="mb-3">
          <Form.Control type="text" placeholder="Cidade" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEStado" label="Estado" className="mb-6">
          <Form.Control type="text" placeholder="Estado" />
        </FloatingLabel>
      </div>
      {/* chamar a propriedade onClick que irá executar uma função para adicionar ao banco de dados. */}
      <Link to="/">
        <Button type="submit">Enviar</Button>  
         
      </Link>

    </>
  );
}
