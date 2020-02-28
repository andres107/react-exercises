import React from "react";
import MyForm from "../../pages/MyForm";
import RenderTextField from '../../components/RenderTextField';
import RenderCheckbox from '../../components/RenderCheckbox';
import RenderRadioButton from '../../components/RenderRadioButton';
import { searchPokemon } from "../../services/actions/pokemons.js";
import { useDispatch } from "react-redux";

export default function MyFormContainer(props){
  const fields = [
    {
      name: "name",
      label: "Nombre",
      component: RenderTextField,
      type: "text"
    },
    {
      name: "firstLastName",
      label: "Apellido Paterno",
      component: RenderTextField,
      type: "text"
    },
    {
      name: "secondLastName",
      label: "Apellido Materno",
      component: RenderTextField,
      type: "text"
    },
    {
      name: "email",
      label: "Correo Electrónico",
      component: RenderTextField,
      type: "text"
    },
    {
      name: "sex",
      label: "Sexo",
      component: RenderRadioButton,
      options: [
        { value: "male", label: "Masculino" },
        { value: "female", label: "Femenino"},
      ]
    },
    {
      name: "student",
      label: "Soy estudiante",
      component: RenderCheckbox,
    },
    {
      name: "card",
      label: "Numero de tarjeta credito/debito",
      component: RenderTextField,
      type: "text"
    },
    {
      name: "cardDateUntil",
      label: "Fecha de vencimiento de tarjeta, ejemplo 07/20",
      component: RenderTextField,
      type: "text"
    },
    {
      name: "cvv",
      label: "CVV de la tarjeta",
      component: RenderTextField,
      type: "text"
    },
  ];
  const dispatch = useDispatch();
  const onSubmit = async (values)=>{

    await dispatch(searchPokemon(
      Math.floor(Math.random() * 965) + 1
    ));
    props.history.push({
      pathname: "/information",
      others: values
    });
  }

  return (
    <>
    <h4> ¡¡LLena los datos para saber que pokemon eres!! </h4>
    <MyForm fields={fields} onSubmit={onSubmit}/>
    </>
  );
}
