import React from "react";
import { Table, ButtonGroup, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

import { db } from "../../firebase.config";

export default function Tabela({ users, reload, setReload }) {
  const deleteUser = async (id) => {
    try {
      const userDoc = doc(db, "usuarios", id);
      await deleteDoc(userDoc);
      toast.success("Usuario removido com sucesso!");
    } catch (e) {
      toast.error(`Erro ao remover usuario: ${e.message}`);
    }
  };

  const handleDeletar = async (idUsuario) => {
    await deleteUser(idUsuario);
    setReload(!reload);
  };

  return (
    <>
      <Container>

        <h2>Informações dos usuários</h2>
     
          <Table variant="primary">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Estado Civil</th>
                <th>CPF</th>
                <th>Cidade</th>
                <th>UF</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.nome}</td>
                  <td>{user.idade}</td>
                  <td>{user.estadoCivil}</td>
                  <td>{user.cpf}</td>
                  <td>{user.cidade}</td>
                  <td>{user.uf}</td>
                  <td>
                    <ButtonGroup size="sm">
                      <Link to={`../formulario/${user.id}`}>
                        <Button variant="outline-success">Atualizar</Button>
                      </Link>
                      <Button
                        onClick={() => {
                          handleDeletar(user.id);
                        }}
                        variant="outline-danger"
                      >
                        Remover
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        <Link to="/formulario">
          <Button>Adicionar cadastro</Button>
        </Link>
      </Container>
    </>
  );
}
