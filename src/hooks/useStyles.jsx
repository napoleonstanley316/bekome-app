import { makeStyles } from '@material-ui/core/styles';

// This hook will allow styling with MUI to be more consistent through components.
// import with "import useStyles from '../../hooks/useStyles'" in a given component
// be sure to declare "const classes = useStyles()" before the return in a component
// ex. className={classes.paper}

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
  inputs: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  chips: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
  chipButtons: {
    margin: theme.spacing(0.5),
    width: '10ch',
  },
  formTitle: {
    paddingRight: theme.spacing(3),
  },
  formButton: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    width: '20ch',
    fontSize: '1.2em',
  },
  stepperText: {
    fontSize: '0.9em',
  },
  checkboxBox: {
    maxHeight: 400,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  filterButton: {
    padding: '5px 20px'
  },
  filterMenu: {
    backgroundColor: '#e0fbfc',
    color: '#3D5A80'
  },
  cardRoot: {
    margin: '0px 0px',
    height: 650,
    width: 325
  },
  cardMedia: {
    height: 200,
  },
  cardButton: {
    justifyContent: 'center',
  },
  cardHeader: {
    padding: 0
  },
  cardContent: {
    textAlign: 'left'
  },
  saveButton: {
    margin: '0 0 8px 0' ,
    padding: '0 8px 0 8px'
  },
}));

export default useStyles;