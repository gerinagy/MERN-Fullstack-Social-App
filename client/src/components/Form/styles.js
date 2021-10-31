import { makeStyles } from '@mui/styles'

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: '5px',
    },
  },
  paper: {
    padding: '10px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    margin: '15px 0',
    background: 'green'
  },
}))