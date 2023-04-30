import React from "react";
import {
  ContainerForm,
  Input,
  Form,
  Label,
  Title,
  Main,
  Button,
} from "./styles";

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
    <ContainerForm>
      <Form>
        <Main>
          <Title>Formulário</Title>
          <Label>Nome</Label>
          <Input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            placeholder="Nome"
          />
          <Label>Idade</Label>
          <Input
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            type="number"
            placeholder="Idade"
          />
          <Label>CPF</Label>
          <Input
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            type="number"
            placeholder="CPF"
          />
          <Label>Estado civil</Label>
          <Input
            value={estadoCivil}
            onChange={(e) => setEstadoCivil(e.target.value)}
            type="text"
            placeholder="Estado Civil"
          />
          <Label>Cidade</Label>
          <Input
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            type="text"
            placeholder="Cidade"
          />
          <Label>UF</Label>
          <Input
            value={uf}
            onChange={(e) => setUf(e.target.value)}
            type="text"
            placeholder="UF"
          />
          <Button onClick={handleSubmit} type="submit">
            adicionar
          </Button>
        </Main>
      </Form>
    </ContainerForm>
  );
}
