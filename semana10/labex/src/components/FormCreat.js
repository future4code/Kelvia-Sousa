import React from 'react';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import {fade, withStyles} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import useInput from '../hooks/useInput';

const Div = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
    >div{
        margin: 5px;
    }
    
`

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);

const FormCreat = () => {
    const [name, handleName] = useInput();
    const [planet, handlePlanet] = useInput();
    const [date, handleDate] = useInput();
    const [description, handleDescription] = useInput();
    const [durationInDays, handleDurationInDays] = useInput();

    return(
        <Div>
            <FormControl>
                <InputLabel shrink htmlFor="bootstrap-input">
                Name
                </InputLabel>
                <BootstrapInput  onChange={handleName} value={name} type='text'/>
            </FormControl>
            <FormControl>
                <InputLabel shrink htmlFor="bootstrap-input">
                Planet
                </InputLabel>
                <BootstrapInput  onChange={handlePlanet} value={planet} type='text'/>
            </FormControl>
            <FormControl>
                <InputLabel shrink htmlFor="bootstrap-input">
                Date
                </InputLabel>
                <BootstrapInput  onChange={handleDate} value={date} type='date'/>
            </FormControl>
            <FormControl>
                <InputLabel shrink htmlFor="bootstrap-input">
                Description
                </InputLabel>
            <TextField onChange={handleDescription} value={description} 
                id="outlined-multiline-static"
                multiline
                rows={2}
                defaultValue=""
                variant="outlined"
            />
            </FormControl>
            <FormControl>
                <InputLabel shrink htmlFor="bootstrap-input">
                Duration(days)
                </InputLabel>
                <BootstrapInput  onChange={handleDurationInDays} value={durationInDays} type='number'/>
            </FormControl>
        </Div>
    );
};

export default FormCreat;