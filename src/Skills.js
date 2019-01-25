import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  title: {
    margin: '32px 0'
  },
  skillsContainer: {
    padding: '20px'
  },
  skillItem: {
    width: "50%",
    padding: "14px !important"
  }
});

const Skills = props => {
  const { classes } = props;
  return (
    <Fragment>
      <Typography variant="h5" align="center" className={classes.title} gutterBottom>
        Professional Skills
      </Typography>
      <Paper>
        <Grid container className={classes.skillsContainer} justify="center" spacing={8}>
          {[0, 1, 2, 3, 4, 5].map(value => (
            <Grid key={value} item className={classes.skillItem}>
              <Typography gutterBottom>Angular</Typography>
              <LinearProgress variant="determinate" value={50} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Fragment>
  );
};

Skills.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Skills);
