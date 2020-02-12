import React from 'react';

export function MyForm(props){
  const { users } = props;

  return (
    <form>
      <label> Nombres: </label>
      <select>
      {users.map((item) => {
         return (
           <option value={item.name} key={item.name + item.lastname}>
             {item.name}
           </option>
         );
       })}
      </select>
    </form>
  );
}
  
export default MyForm;
