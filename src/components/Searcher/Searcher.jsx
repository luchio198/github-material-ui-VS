import React, { useState } from 'react'
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon  from '@mui/icons-material/Search';

const Searcher = ({setInputUser}) => {
  
  const [valueInput, setValueInput] = useState('')
  
  const onSearchValueChange = (event) => {
    const inputValue = event.target.value 
    setValueInput(inputValue)
  }
  const handleSubmit = () => {
    setInputUser(valueInput)
  }
  const handleEnterKeyDown = (e) => {
    if (e.key === 'Enter') {
      setInputUser(valueInput)
    } 
  }
  
  return (
    <Stack 
    direction= 'row'
    sx={{
  marginTop: '30px',
  width: '80%'  
  }}>
<TextField
id="outlined-basic"
value={valueInput}
onChange={onSearchValueChange}
onKeyDown={handleEnterKeyDown}
label="GitHub User"
placeholder='Search...'
variant="outlined"
size='small'
sx={{
  width: '90%',
  
}}>
  </TextField>
  <IconButton
  onClick={handleSubmit}
  sx={{
    size:'small',
    left: '-45px'
  }}>
    <SearchIcon/>
    </IconButton>    
  </Stack>
  )
}

export default Searcher