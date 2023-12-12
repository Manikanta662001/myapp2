import React from 'react'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import  Checkbox  from '@mui/material/Checkbox'
const Muilibrary = () => {
  return (
    <div>
        <div>Muilibrary</div>
        <Button variant='outlined' color='error' size='large' disabled>Hello World</Button>
        <Button variant="contained" color="success" size='small'>Success</Button>
        <Button variant="outlined" startIcon={<DeleteIcon/>}> Delete</Button>
        <Button variant="outlined" endIcon={<SendIcon/>}> Send</Button>
        <Checkbox defaultChecked color='secondary'/>
        <Checkbox checked/>
    </div>
  )
}
export default Muilibrary