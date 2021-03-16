import {
    Paper,
    TextField,
    Typography,
    Grid,
    IconButton,
    Button,
    List,
    ListItem,
    ListItemSecondaryAction
} from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from '../../hooks/useStyles';


function AdminPanelForm({category, filteredPreferences, addPreference, editPreference, deletePreference, handleInputs, newPref, notes}) {
    const classes = useStyles()


    return (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4} >
            <Paper className={classes.paper}>
                <Typography variant="h6">
                    {category}
                </Typography>

                <Typography variant="caption">
                    {notes}
                </Typography>

                <List>
                    {filteredPreferences.map((preference) => {
                        return (
                            <ListItem key={preference.id}>
                                {preference.name}
                                <ListItemSecondaryAction>
                                    <IconButton onClick={() => editPreference(preference.id)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => deletePreference(preference.id)}>
                                        <Delete />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                </List>

                <TextField
                className={classes.inputs}
                variant="outlined"
                label="new preference"
                onChange={handleInputs(category)}
                value={newPref[category]}
                />

                <Button
                className={classes.adminPanelButton}
                onClick={addPreference(category)}
                variant="contained"
                color="primary"
                >
                    Add
                </Button>
            </Paper>
        </Grid>
    )
}

export default AdminPanelForm;