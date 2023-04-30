import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase.config";

import Tabela from "../../components/Tabela";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);

  const usersCollectionRef = collection(db, "usuarios");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [usersCollectionRef]);

  return <Tabela users={users} reload={reload} setReload={setReload} />;
}
