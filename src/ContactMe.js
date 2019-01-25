import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  title: {
    margin: "32px 0"
  },
  container: {
    padding: "20px"
  },
  item: {
    padding: "14px !important"
  },
  paper: {
    padding: 30
  },
  subTitle: {
    padding: "0 20px"
  },
  contactContainer: {
    padding: "28px 0"
  },
  contact: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class ContactMe extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };
  render() {
    const { classes } = this.props;
    const contacts = {
      email: "tonydangelo123@gmail.com",
      phone: "+393291880005",
      skype: "toni.dangelo",
      address: "81475, Germany, Munich, Oberbrunner Straße 34"
    };
    const handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      });
    };

    return (
      <Fragment>
        <Typography
          variant="h5"
          align="center"
          className={classes.title}
          gutterBottom
        >
          Contact Me
        </Typography>
        <Grid
          container
          className={classes.container}
          justify="center"
          spacing={8}
        >
          <Grid item xs={12} sm={6} className={classes.item}>
            <Paper className={classes.paper}>
              <Typography
                className={classes.subTitle}
                variant="h6"
                gutterBottom
              >
                Feel free to ask me
              </Typography>
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="name"
                  label="Name"
                  value={this.state.name}
                  onChange={handleChange("name")}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  value={this.state.email}
                  onChange={handleChange("email")}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="subject"
                  label="Subject"
                  value={this.state.subject}
                  onChange={handleChange("subject")}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="message"
                  label="Message"
                  type="text"
                  value={this.state.message}
                  onChange={handleChange("message")}
                  fullWidth
                  margin="normal"
                />
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.item}>
            <Paper className={classes.paper}>
              <Typography
                className={classes.subTitle}
                variant="h6"
                gutterBottom
              >
                My contacts
              </Typography>
              <Grid container className={classes.contactContainer} spacing={24}>
                {Object.entries(contacts)
                  // .map(arr => ({ [arr[0]]: arr[1] }))
                  .map((arr, index) => (
                    <Fragment key={index}>
                      <Grid item xs={2}>
                        <div className={classes.contact}>
                          <Typography>{arr[0]}</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={10}>
                        <div className={classes.contact}>{arr[1]} </div>
                      </Grid>
                    </Fragment>
                  ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

ContactMe.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(ContactMe);
