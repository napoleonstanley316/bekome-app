import { useSelector, useDispatch } from 'react-redux';
import {
  Typography,
  Paper,
  Switch,
  FormControlLabel,
  Grid,
} from '@material-ui/core';
// Custom hooks
import useStyles from '../../../hooks/useStyles';
// Components
import FormCheckboxes from '../../FormCheckboxes/FormCheckboxes';
import FormMenuChips from '../../FormMenuChips/FormMenuChips';

// Part of new client form stepper, lists the provider qualities a client
// can choose from
function ClientForm4ProviderPreferences() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { sliding_scale } = useSelector((store) => store.forms.clientAnswers);

  return (
    <Paper className={classes.paper} elevation={4}>
      <Typography>
        <b>My ideal therapist would be:</b>
      </Typography>
      <Grid container spacing={5}>
        <Grid container item xs={8}>
          <Grid item xs={6}>
            <FormCheckboxes category={'genders'} />
          </Grid>
          <Grid item xs={6}>
            <FormCheckboxes category={'ethnicities'} />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              className={classes.clientChips}
              control={
                <Switch
                  checked={sliding_scale}
                  onChange={() =>
                    dispatch({
                      type: 'SET_CLIENT_PERSONAL_DETAILS',
                      payload: { key: 'sliding_scale', value: !sliding_scale },
                    })
                  }
                />
              }
              label="I would like to see someone with sliding scale payments"
            />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <FormCheckboxes category={'sexual_orientations'} />
          <Typography className={classes.clientChips}>
            <b>My therapist should speak:</b>
          </Typography>
          <FormMenuChips category={'languages'} string={'Languages'} />
          <Typography className={classes.clientChips}>
            <b>My therapist's ideal religion would be:</b>
          </Typography>
          <FormMenuChips category={'religions'} string={'Religions'} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ClientForm4ProviderPreferences;
