import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined'
import Face2OutlinedIcon from '@mui/icons-material/Face2Outlined'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
function MUI6() {
   return (
      <>
         <div>
            <AddReactionOutlinedIcon />
            <Face2OutlinedIcon />
            <IconButton aria-label="delete">
               <DeleteIcon />
            </IconButton>
         </div>
      </>
   )
}

export default MUI6
