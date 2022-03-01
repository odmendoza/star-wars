import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector(state => state.user);
  return (
    <div>
        <h1>Perfil</h1>
        <p>Nombre: {user.value.name}</p>
        <p>Usuario desde: {user.value.created}</p>
        <p>Peliculas: {user.value.films}</p>
    </div>
  )
}

export default Profile;