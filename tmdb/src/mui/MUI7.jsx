import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function MUI7() {
   const [color, setColor] = useState('primary')

   const handleClick = () => {
      setColor((prevColor) => (prevColor === 'primary' ? 'secondary' : 'primary'))
   }
   return (
      <Box>
         <Button variant="contained" color={color} onClick={handleClick}>
            Toggle Color
         </Button>
      </Box>
   )
}

export default MUI7
