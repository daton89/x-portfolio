import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1,
    padding: '15px 30px'
  },
  divider: {
    margin: '10px 0'
  },
  cardMedia: {
    width: 260
  }
});

const AboutMe = props => {
  const { classes, name, description, image } = props;
  return (
    <Grid container spacing={40} className={classes.cardGrid}>
      <Grid item xs={12} md={12}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {name}
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="subtitle1" paragraph>
                {description}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={image} // eslint-disable-line max-len
              title="profile image"
            />
          </Hidden>
        </Card>
      </Grid>
    </Grid>
  );
};

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default withStyles(styles)(AboutMe);
