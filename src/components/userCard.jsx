import React from 'react'

export function UserCard(props) {
  const { name, lastName, job, active } = props;

  return (
    <>
    <b>Nombre</b>: {name}<br/>
    <b>Apellido</b>: {lastName}<br/>
    <b>Trabajo</b>: {job}<br/>
    <b>Activo</b>: {active ? 'Si' : 'No'}<br/>
    --------------------------------------<br/>
    </>
  );
}

export default UserCard;
