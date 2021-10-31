import { makeStyles } from '@mui/styles'

export default makeStyles((theme) => ({
  paper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  root: {
    '& .MuiTextField-root': {
      margin: 1,
    },
  },
  avatar: {
    margin: 1,
    backgroundColor: 'blue',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '30px',
  },
  submit: {
    margin: '30px 0px 10px'
  },
  googleButton: {
    marginBottom: 2,
  },
}))