import { useSelector, useDispatch } from 'react-redux';
import {
  Paper,
  Typography,
} from '@material-ui/core';

// Component imports
import FormPreferencesChecks from '../FormPreferencesChecks/FormPreferencesChecks';

function ProviderPreferencesForm({ classes }) {

  return (
    <Paper className={classes.paper} elevation={4}>
      <Typography>What qualities do you look for in a therapist?</Typography>
      <FormPreferencesChecks
        category={'qualities'}
        limit={5}
      />
    </Paper>
  );
}

export default ProviderPreferencesForm;
