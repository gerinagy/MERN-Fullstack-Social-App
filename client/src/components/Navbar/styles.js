import { makeStyles } from '@mui/styles'

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
  },
  heading: {
    color: 'black',
    fontFamily: 'monospace',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',

  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 15px'
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    padding: '0px 15px'

  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logout: {
    padding: '5px 15px',
    background: 'linear-gradient(to right, #114755 0%, #26a0da  51%, #114755  100%)',
    width: '100px'
  }
}))