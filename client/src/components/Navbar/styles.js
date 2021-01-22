import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    width: '100%',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  [theme.breakpoints.down('sm')]: {
    toolbar: {
      width: '100%',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
  },
  title: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    flexGrow: 1,
  },
  logout: {
    margin: theme.spacing(1, 1.5),
  },
  button: {
    margin: theme.spacing(1, 1.5),
  },
  image: {
    marginLeft: '15px',
  },
  profile: {
    display: 'flex',
    margin: theme.spacing(1, 1.5),
  },
  userName: {
    margin: theme.spacing(1, 1.5),
    whiteSpace: 'nowrap',
  },
  brandContainer: {
    marginLeft: '15px',
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    margin: theme.spacing(1, 1.5),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));