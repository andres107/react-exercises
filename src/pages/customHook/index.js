import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import useModal from "../../hooks/Modal";
import useSelect from "../../hooks/Select";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { DistortionText, FliesText } from 'react-text-fun'
import { getHoroscope } from "../../services/apis/horoscope.js";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function CustomHook(){
  const classes = useStyles();
  const {
    modalContent,
    handleOpenModal,
    handleCloseModal,
    setModalContent,
    setModalTitle,
    modal
  } = useModal();

  const {selected, handleSelect} = useSelect();

  const options = {
    Aquarius: 'Acuario',
    Pisces: 'Picis',
    Aries: 'Aries',
    Taurus: 'Tauro',
    Gemini: 'Géminis',
    Cancer: 'Cáncer',
    Leo: 'Leo',
    Virgo: 'Virgo',
    Libra: 'Libra',
    Scorpio: 'Escorpio',
    Sagittarius: 'Sagitario',
    Capricorn: 'Capricornio'
  };

  const searchHoroscope = async () => {
    const response = await getHoroscope(selected);
    setModalContent(response.content);
    setModalTitle(response.sign);
    handleOpenModal();

  };

  return (
    <FormControl className={classes.formControl}>
    <FliesText
      cellRadius={1}
      text="Descubre tu Fortuna"
      fontSize={50}
      rotation={1.0}
      rgbOffset={0.8}
      addBlur={false}
      addNoise={true}
    />

    <DistortionText
      fontSize={50}
      text='Selecciona tu signo Zodiacal'
    />
      <Select
        labelId="simple-select-label"
        id="simple-select"
        value={selected}
        onChange={e => handleSelect(e)}
      >
      {Object.keys(options).map((key) => {
         return <MenuItem value={key} color='primary' key={key}>{options[key]}</MenuItem>;
	 })}
      </Select>
      <Button
        variant="contained"
        color="primary"
	onClick={()=> searchHoroscope()}
      >
         Dame mi fortuna
      </Button>

      {modal ?
      (<div>
         <Modal
           open={modal}
           onClose={() => handleCloseModal()}
           aria-labelledby="simple-modal-title"
           aria-describedby="simple-modal-description"
         >
	 {modalContent}
      </Modal>
    </div>) : null
     }
    </FormControl>
  );
}

export default CustomHook;
