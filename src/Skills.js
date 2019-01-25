import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  title: {
    margin: '32px 0'
  },
  subtitle: {
    margin: '5px 15px'
  },
  paper: {
    padding: '20px'
  },
  grid: {
  },
  gridItem: {
    width: "50%",
    padding: "14px !important"
  }
});

const Skills = props => {
  const { classes, description, collection } = props;
  return (
    <Fragment>
      <Typography variant="h5" align="center" className={classes.title} gutterBottom>
        Professional Skills
      </Typography>
      <Paper className={classes.paper}>
      <Typography variant="subtitle1" className={classes.subtitle} gutterBottom>
        {description}
      </Typography>
        <Grid container className={classes.grid} justify="center" spacing={8}>
          {collection.map(({name, level}, index) => (
            <Grid key={index} item className={classes.gridItem}>
              <Typography gutterBottom>{name}</Typography>
              {level === 'basic' && <LinearProgress variant="determinate" value={30} />}
              {level === 'medium' && <LinearProgress variant="determinate" value={60} />}
              {level === 'advanced' && <LinearProgress variant="determinate" value={90} />}
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Fragment>
  );
};

Skills.propTypes = {
  classes: PropTypes.object,
  description: PropTypes.string,
  collection: PropTypes.array,
};

export default withStyles(styles)(Skills);
