import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    doc,
  } from "firebase/firestore";

  import { db } from "../../firebase.config";
  import FormCliente from '../../components/FormCliente';

export default function Formulario() {
    const [idade, setIdade] = useState();
    const [nome, setNome] = useState();
    const [estadoCivil, setEstadoCivil] = useState();
    const [cidade, setCidade] = useState();
    const [uf, setUf] = useState();
    const [cpf, setCpf] = useState();

    const params = useParams();
    const navigate = useNavigate();

    const editar = !!params?.idUsuario;

    const usersCollectionRef = collection(db, "usuarios");

    const updateUser = async (id, user) => {
        const userDoc = doc(db, "usuarios", id);
        await updateDoc(userDoc, user);
    };

    const createUser = async (user) => {
        await addDoc(usersCollectionRef, user);
    };

    const handleSubmit = () => {
        const user = {
            idade,
            nome,
            estadoCivil,
            cidade,
            uf,
            cpf
        }

        if (editar) {
            try {
                const idUsuario = params?.idUsuario;
                updateUser(idUsuario, user);
                navigate('../');

                toast.success('Usuario atualizado com sucesso!');
            } catch (e) {
                toast.error(`Erro ao atualizar usuario: ${e.message}`);
            }
        } else {
            try {
                createUser(user);
                navigate('../');
                
                toast.success('Usuario cadastrado com sucesso!');
            } catch (e) {
                toast.error(`Erro ao cadastrar usuario: ${e.message}`);
            }
        }
    }

    useEffect(() => {
        const getUsers = async () => {
            if (editar) {
                const idUsuario = params?.idUsuario;

                const data = await getDocs(usersCollectionRef);

                let user = data.docs.filter(user => user.id === idUsuario);
                
                user = user.map((doc) => ({ ...doc.data() }))

                setIdade(user[0].idade);
                setNome(user[0].nome);
                setEstadoCivil(user[0].estadoCivil);
                setCidade(user[0].cidade);
                setUf(user[0].uf);
                setCpf(user[0].cpf);
            }
        };

        getUsers();
    }, []);

    return (
        // <FormCliente 
        //     idade={idade} 
        //     setIdade={setIdade}
        // />



        <>
            <h1>Formulario</h1>
            <input value={idade} onChange={(e) => setIdade(e.target.value)} placeholder="idade"/>
            <input value={estadoCivil} onChange={(e) => setEstadoCivil(e.target.value)} placeholder="estado civil"/>
            <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="nome"/>
            <input value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder="cidade"/>
            <input value={uf} onChange={(e) => setUf(e.target.value)} placeholder="uf"/>
            <input value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="cpf"/>
            <button onClick={handleSubmit}>Enviar</button>
        </>
    );
}