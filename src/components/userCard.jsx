import React from 'react'

export function UserCard(props) {
  const { name, lastName, job, active } = props;

  return (
    <>
    <b>Nombre</b>: {name}<br/>
    <b>Apellido</b>: {lastName}<br/>
    <b>Trabajo</b>: {job}<br/>
    <b>Activo</b>: {active}<br/>
    </>
  );
}

export default UserCard;
