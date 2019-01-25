import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@material-ui/icons/Star";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  title: {
    margin: "32px 0"
  },
  elementTitle: {
    left: '130%'
  }
});

const XVerticalTimeline = props => {
  const { classes, /* description, */ collection } = props;

  return (
    <Fragment>
      <Typography
        variant="h5"
        align="center"
        className={classes.title}
        gutterBottom
      >
        Career
      </Typography>
      <VerticalTimeline>
        {collection.map(
          ({ type, title, subtitle, location, start, end }, index) =>
            type === "work" ? (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                date={start + " - " + end}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <h3 className={'vertical-timeline-element-title'}>{title}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {location}
                </h4>
                <p>{subtitle}</p>
              </VerticalTimelineElement>
            ) : (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--education"
                date={start + " - " + end}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">{title}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {location}
                </h4>
                <p>{subtitle}</p>
              </VerticalTimelineElement>
            )
        )}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </Fragment>
  );
};

XVerticalTimeline.propTypes = {
  classes: PropTypes.object,
  description: PropTypes.string,
  collection: PropTypes.array
};

export default withStyles(styles)(XVerticalTimeline);
