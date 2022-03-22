import React from "react";
import { Form, Button, FloatingLabel, Container, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FormCliente({
  idade,
  setIdade,
  nome,
  setNome,
  estadoCivil,
  setEstadoCivil,
  cidade,
  setCidade,
  uf,
  setUf,
  cpf,
  setCpf,
  handleSubmit,
}) {
  return (
    <>
      <Container>
        <h3>Formulário</h3>
        <FloatingLabel controlId="floatingInput" label="Nome" className="mb-3">
          <Form.Control
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            placeholder="Nome"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingIdade" label="Idade" className="mb-3">
          <Form.Control
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            type="number"
            placeholder="Idade"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingCpf" label="CPF" className="mb-3">
          <Form.Control
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            type="text"
            placeholder="CPF"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingEstadoCivil"
          label="Estado Civil"
          className="mb-3"
        >
          <Form.Control
            value={estadoCivil}
            onChange={(e) => setEstadoCivil(e.target.value)}
            type="text"
            placeholder="Estado Civil"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingCidade"
          label="Cidade"
          className="mb-3"
        >
          <Form.Control
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            type="text"
            placeholder="Cidade"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEStado" label="UF">
          <Form.Control
            value={uf}
            onChange={(e) => setUf(e.target.value)}
            type="text"
            placeholder="UF"
          />
        </FloatingLabel>

        <Link to="/">
          <Stack gap={5} className="col-md-2 mx-auto">
            <Button onClick={handleSubmit} type="submit">
              Enviar
            </Button>
          </Stack>
        </Link>
      </Container>
    </>
  );
}
