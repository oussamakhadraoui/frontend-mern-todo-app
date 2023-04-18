import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function FullWidthTextField(props) {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '70%',
      }}
    >
      <TextField
        onChange={props.onChange}
        value={props.value}
        className='input'
        fullWidth
        label={props.label}
        id='fullWidth'
      />
    </Box>
  )
}
