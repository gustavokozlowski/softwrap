import React from "react";
import { ButtonGroup, Button, Container } from "react-bootstrap";
import {
  ButtonAdd
} from "./styles";
import { Link } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import {
  PersonDashFill,
  PencilSquare,
  PersonFillAdd,
} from "react-bootstrap-icons";

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
      <Container className="container-fluid text-center p-3">
        <h2 className="text-start">Usuários cadastrados</h2>

        <table className="container table border border-3 border-dark table-primary">
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
                      <Button size="sm" variant="outline-success">
                        Atualizar <PencilSquare />
                      </Button>
                    </Link>
                    <Button
                      className="ms-2"
                      size="sm"
                      onClick={() => {
                        handleDeletar(user.id);
                      }}
                      variant="outline-danger"
                    >
                      Deletar <PersonDashFill />
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/formulario">
          <ButtonAdd>
            adicionar
            <PersonFillAdd />
          </ButtonAdd>
        </Link>
      </Container>
    </>
  );
}
