import { makeStyles } from '@material-ui/core/styles';
import Image from './atop-hill.jpeg';

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
  chipsSignup: {
    width: '18ch',
    margin: theme.spacing(0.5),
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
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  filterButton: {
    padding: '5px 20px',
  },
  filterMenu: {
    backgroundColor: '#e0fbfc',
    color: '#3D5A80',
  },
  cardRoot: {
    margin: '0px 0px',
    height: 640,
    width: 340,
  },
  savedProviderCard: {
    margin: '10px 0px',
    paddingTop: '20px',
    width: 325,
    height: 450,
  },
  cardMedia: {
    height: 200,
    width: '85%',
    borderRadius: '5px',
  },
  cardButton: {
    justifyContent: 'center',
  },
  cardHeader: {
    padding: 5,
    paddingLeft: 50,
    textAlign: 'center',
  },
  cardContent: {
    textAlign: 'left',
    padding: '10 25px 10 25px',
    height: 300,
    overflow: 'scroll',
  },
  savedCard: {
    textAlign: 'left',
    padding: '10 25px 10 25px',
    width: '350px',
  },
  videoBtn: {
    padding: 0,
    marginRight: theme.spacing(1),
    transform: 'scale(1.3)',
  },
  saveButton: {
    // paddingRight: 5,
    // paddingTop: 5
  },
  pic: {
    width: 350,
    height: 350,
    objectFit: 'cover',
    borderRadius: '40px',
    padding: theme.spacing(3),
  },
  stateSelect: {
    width: '100%',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  accordionTitle: {
    alignSelf: 'center',
  },
  picPreview: {
    width: 200,
    height: 200,
    objectFit: 'cover',
    paddingLeft: theme.spacing(2),
  },
  adminPanelButton: {
    position: 'absolute',
    marginLeft: '15px',
    padding: 0,
  },
  adminModal: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '100px',
    left: '100px',
  },
  landingTypography: {
    color: '#e0fbfc',
    margin: '50px 30px 0px 30px',
  },
  landingButton: {
    width: '200px',
    margin: '32px',
  },
  howWorksText: {
    padding: '10px',
  },
  howWorksButton: {
    width: '200px',
    margin: '10px',
  },
  loginContainer: {
    margin: 'auto',
    width: '400px',
    height: '560px',
  },
  centerContainer: {
    paddingTop: '50px',
    height: '100vh',
    backgroundImage: `url(${Image})`,
  },
  editClientButton: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: '15ch',
  },
  editClientAccordion: {
    display: 'block',
    padding: theme.spacing(3),
  },
  filterDrawer: {
    width: 300,
  },
  filterListItem: {
    paddingLeft: theme.spacing(4),
  },
  loginBtn: {
    width: '95%',
  },
  loginForm: {
    margin: '30px',
  },
  loginTextField: {
    '& .MuiOutlinedInput-input': {
      padding: '8px 8px',
    },
  },
  submitBtn: {
    width: 150,
  },
  adminModalInput: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  questionsFormContainer: {
    margin: theme.spacing(10),
    padding: theme.spacing(3),
  },
  video: {
    border: '10px solid #e0fbfc',
  },
  messageBar: {
    position: 'fixed',
    padding: theme.spacing(1),
    width: 300,
    bottom: 0,
    right: 10,
    cursor: 'pointer',
    zIndex: 2,
  },
  messagingWidgetAvatar: {
    height: theme.spacing(4),
    width: theme.spacing(4),
  },
  messagingListAvatar: {
    height: theme.spacing(5),
    width: theme.spacing(5),
  },
  messagingWindowAvatar: {
    height: theme.spacing(4),
    width: theme.spacing(4),
    marginRight: theme.spacing(1.5),
  },
  messagingWindow: {
    position: 'fixed',
    padding: theme.spacing(1),
    width: 350,
    minHeight: 300,
    bottom: 0,
    right: 350,
    zIndex: 2,
  },
  messagingBody: {
    height: 250,
    overflow: 'scroll',
  },
  messagingWidgetListItem: {
    height: 100,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  userBubble: {
    maxWidth: '75%',
    borderRadius: 12,
    backgroundColor: '#3D5A80',
    color: 'white',
  },
  notUserBubble: {
    maxWidth: '75%',
    borderRadius: 12,
    backgroundColor: '#eeeeee',
  },
  messageTextField: {
    fontSize: '0.9em',
  },
  unreadMessageText: {
    fontWeight: 700,
  },
  messagePreviewBox: {
    height: 60,
    overflow: 'hidden',
  },
  backBtn: {
    marginLeft: '-15px',
  },
  clientContent: {
    textAlign: 'left',
    padding: '10 25px 10 25px',
    height: 220,
    overflow: 'scroll',
  },
  clientHeader: {
    padding: 5,
    textAlign: 'center',
  },
  userCardIcons: {
    marginRight: theme.spacing(1),
  },
  clientChips: {
    margin: '15px 0 10px 0',
  },
  savedUserCardsContent: {
    minHeight: 90,
  },
}));

export default useStyles;
