import React from "react";
import { useRef, useEffect} from "react"
import { styled, alpha } from "@mui/material/styles";
import { drawerWidth } from "./constants";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Typography from "@mui/material/Typography";

const blueGradient = 'linear-gradient(180deg, #6b9dff, #2b71ff)';

const AddressFormPaper = styled(Paper)(({ theme}) => ({
  borderRadius: 8,
  marginBottom: theme.spacing(2),
  width: 413,
  flex: '0 1 auto',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  [theme.breakpoints.down(drawerWidth)]: {
    width: '100%'
  }
}));


const AddressFormHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: 5,
  position: 'relative',
}));

const AddressFormDivider = styled('span')(({ theme }) => ({
  width: '85%',
  padding: 1,
  position: 'absolute',
  bottom: -2,
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: alpha(theme.palette.common.black, 0.1),
}));

const AddressFormContent = styled('div')({
  padding: '7px 15px 15px 15px'
});

const CloseButton = styled(Button)(({ theme }) => ({
  padding: 0,
  margin: 0,
  minWidth: 28,
  background: blueGradient
}));

function AddressForm({ index, address, id, handleDelete,handleDragStart,handleDragEnter,handleDragEnd}) {
  const formRef = useRef();

  
  //update data-index
  useEffect(() => {
    const target = formRef.current;
    target.setAttribute('data-index', index);
    target.setAttribute('data-testid', index);
  }, [index]);

   //update data-id
  useEffect(() => {
    const target = formRef.current;
    target.setAttribute('data-id', id);
  }, [id]);

//delete an addressForm from an AddressFormContainer
  const handleCloseBtn = (e) => {
    let container = e.target.closest('.MuiPaper-root')
    handleDelete(container.dataset.id);
  }

  return (
    <AddressFormPaper 
      ref={formRef}
      draggable
      onDragStart={handleDragStart(index)}
      onDragEnter={handleDragEnter(index)}
      onDragEnd={handleDragEnd}
      >
      <AddressFormHeader>
        <CloseButton variant="contained" onClick={handleCloseBtn}>
          <CloseIcon />
        </CloseButton>
        <AddressFormDivider />
      </AddressFormHeader>
      <AddressFormContent>
        <Typography variant="subtitle1" color="initial">
          {address}
        </Typography>
      </AddressFormContent>
    </AddressFormPaper>
  );
}

export default AddressForm;