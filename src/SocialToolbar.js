import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%"
  },
  flex: {
    display: "flex",
    justifyContent: "center"
},
iconContainer: {
    width: 128,
    display: "flex",
    justifyContent: "center"
  }
});

const SocialToolbar = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="relative" color="primary">
        <Toolbar className={classes.flex}>
          <div className={classes.iconContainer}>
            <IconButton color="inherit">
              <img
                src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDkwIDkwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5MCA5MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGlkPSJGYWNlYm9va19feDI4X2FsdF94MjlfIiBkPSJNOTAsMTUuMDAxQzkwLDcuMTE5LDgyLjg4NCwwLDc1LDBIMTVDNy4xMTYsMCwwLDcuMTE5LDAsMTUuMDAxdjU5Ljk5OCAgIEMwLDgyLjg4MSw3LjExNiw5MCwxNS4wMDEsOTBINDVWNTZIMzRWNDFoMTF2LTUuODQ0QzQ1LDI1LjA3Nyw1Mi41NjgsMTYsNjEuODc1LDE2SDc0djE1SDYxLjg3NUM2MC41NDgsMzEsNTksMzIuNjExLDU5LDM1LjAyNFY0MSAgIGgxNXYxNUg1OXYzNGgxNmM3Ljg4NCwwLDE1LTcuMTE5LDE1LTE1LjAwMVYxNS4wMDF6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
                alt="facebook"
              />
            </IconButton>
          </div>
          <div className={classes.iconContainer}>
            <IconButton color="inherit">
              <img
                src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDQzMC4xMTcgNDMwLjExNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDMwLjExNyA0MzAuMTE3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggaWQ9IlR3aXR0ZXJfX3gyOF9hbHRfeDI5XyIgZD0iTTM4MS4zODQsMTk4LjYzOWMyNC4xNTctMS45OTMsNDAuNTQzLTEyLjk3NSw0Ni44NDktMjcuODc2ICAgYy04LjcxNCw1LjM1My0zNS43NjQsMTEuMTg5LTUwLjcwMyw1LjYzMWMtMC43MzItMy41MS0xLjU1LTYuODQ0LTIuMzUzLTkuODU0Yy0xMS4zODMtNDEuNzk4LTUwLjM1Ny03NS40NzItOTEuMTk0LTcxLjQwNCAgIGMzLjMwNC0xLjMzNCw2LjY1NS0yLjU3Niw5Ljk5Ni0zLjY5MWM0LjQ5NS0xLjYxLDMwLjg2OC01LjkwMSwyNi43MTUtMTUuMjFjLTMuNS04LjE4OC0zNS43MjIsNi4xODgtNDEuNzg5LDguMDY3ICAgYzguMDA5LTMuMDEyLDIxLjI1NC04LjE5MywyMi42NzMtMTcuMzk2Yy0xMi4yNywxLjY4My0yNC4zMTUsNy40ODQtMzMuNjIyLDE1LjkxOWMzLjM2LTMuNjE3LDUuOTA5LTguMDI1LDYuNDUtMTIuNzY5ICAgQzI0MS42OCw5MC45NjMsMjIyLjU2MywxMzMuMTEzLDIwNy4wOTIsMTc0Yy0xMi4xNDgtMTEuNzczLTIyLjkxNS0yMS4wNDQtMzIuNTc0LTI2LjE5MiAgIGMtMjcuMDk3LTE0LjUzMS01OS40OTYtMjkuNjkyLTExMC4zNTUtNDguNTcyYy0xLjU2MSwxNi44MjcsOC4zMjIsMzkuMjAxLDM2LjgsNTQuMDhjLTYuMTctMC44MjYtMTcuNDUzLDEuMDE3LTI2LjQ3NywzLjE3OCAgIGMzLjY3NSwxOS4yNzcsMTUuNjc3LDM1LjE1OSw0OC4xNjksNDIuODM5Yy0xNC44NDksMC45OC0yMi41MjMsNC4zNTktMjkuNDc4LDExLjY0MmM2Ljc2MywxMy40MDcsMjMuMjY2LDI5LjE4Niw1Mi45NTMsMjUuOTQ3ICAgYy0zMy4wMDYsMTQuMjI2LTEzLjQ1OCw0MC41NzEsMTMuMzk5LDM2LjY0MkMxMTMuNzEzLDMyMC44ODcsNDEuNDc5LDMxNy40MDksMCwyNzcuODI4ICAgYzEwOC4yOTksMTQ3LjU3MiwzNDMuNzE2LDg3LjI3NCwzNzguNzk5LTU0Ljg2NmMyNi4yODUsMC4yMjQsNDEuNzM3LTkuMTA1LDUxLjMxOC0xOS4zOSAgIEM0MTQuOTczLDIwNi4xNDIsMzkzLjAyMywyMDMuNDg2LDM4MS4zODQsMTk4LjYzOXoiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                alt="twitter"
              />
            </IconButton>
          </div>
          <div className={classes.iconContainer}>
            <IconButton color="inherit">
              <img
                src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzUyLDBIMTYwQzcxLjY0OCwwLDAsNzEuNjQ4LDAsMTYwdjE5MmMwLDg4LjM1Miw3MS42NDgsMTYwLDE2MCwxNjBoMTkyYzg4LjM1MiwwLDE2MC03MS42NDgsMTYwLTE2MFYxNjAgICAgQzUxMiw3MS42NDgsNDQwLjM1MiwwLDM1MiwweiBNNDY0LDM1MmMwLDYxLjc2LTUwLjI0LDExMi0xMTIsMTEySDE2MGMtNjEuNzYsMC0xMTItNTAuMjQtMTEyLTExMlYxNjBDNDgsOTguMjQsOTguMjQsNDgsMTYwLDQ4ICAgIGgxOTJjNjEuNzYsMCwxMTIsNTAuMjQsMTEyLDExMlYzNTJ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDEyOGMtNzAuNjg4LDAtMTI4LDU3LjMxMi0xMjgsMTI4czU3LjMxMiwxMjgsMTI4LDEyOHMxMjgtNTcuMzEyLDEyOC0xMjhTMzI2LjY4OCwxMjgsMjU2LDEyOHogTTI1NiwzMzYgICAgYy00NC4wOTYsMC04MC0zNS45MDQtODAtODBjMC00NC4xMjgsMzUuOTA0LTgwLDgwLTgwczgwLDM1Ljg3Miw4MCw4MEMzMzYsMzAwLjA5NiwzMDAuMDk2LDMzNiwyNTYsMzM2eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPGNpcmNsZSBjeD0iMzkzLjYiIGN5PSIxMTguNCIgcj0iMTcuMDU2IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
                alt="instagram"
              />
            </IconButton>
          </div>
          <div className={classes.iconContainer}>
            <IconButton color="inherit" aria-label="Open drawer">
              <img
                src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDQzMC4xMTcgNDMwLjExNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDMwLjExNyA0MzAuMTE3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggaWQ9IkxpbmtlZEluIiBkPSJNNDMwLjExNywyNjEuNTQzVjQyMC41NmgtOTIuMTg4VjI3Mi4xOTNjMC0zNy4yNzEtMTMuMzM0LTYyLjcwNy00Ni43MDMtNjIuNzA3ICAgYy0yNS40NzMsMC00MC42MzIsMTcuMTQyLTQ3LjMwMSwzMy43MjRjLTIuNDMyLDUuOTI4LTMuMDU4LDE0LjE3OS0zLjA1OCwyMi40NzdWNDIwLjU2aC05Mi4yMTljMCwwLDEuMjQyLTI1MS4yODUsMC0yNzcuMzJoOTIuMjEgICB2MzkuMzA5Yy0wLjE4NywwLjI5NC0wLjQzLDAuNjExLTAuNjA2LDAuODk2aDAuNjA2di0wLjg5NmMxMi4yNTEtMTguODY5LDM0LjEzLTQ1LjgyNCw4My4xMDItNDUuODI0ICAgQzM4NC42MzMsMTM2LjcyNCw0MzAuMTE3LDE3Ni4zNjEsNDMwLjExNywyNjEuNTQzeiBNNTIuMTgzLDkuNTU4QzIwLjYzNSw5LjU1OCwwLDMwLjI1MSwwLDU3LjQ2MyAgIGMwLDI2LjYxOSwyMC4wMzgsNDcuOTQsNTAuOTU5LDQ3Ljk0aDAuNjE2YzMyLjE1OSwwLDUyLjE1OS0yMS4zMTcsNTIuMTU5LTQ3Ljk0QzEwMy4xMjgsMzAuMjUxLDgzLjczNCw5LjU1OCw1Mi4xODMsOS41NTh6ICAgIE01LjQ3Nyw0MjAuNTZoOTIuMTg0di0yNzcuMzJINS40NzdWNDIwLjU2eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                alt="linkedin"
              />
            </IconButton>
          </div>
          <div className={classes.iconContainer}>
            <IconButton color="inherit">
              <img
                src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDkwIDkwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5MCA5MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGlkPSJHaXRodWJfX3gyOF9hbHRfeDI5XyIgZD0iTTY1LjcwOSwxMC41YzEuMTcsMi42NTcsMS45MjgsNy4wNywwLjc5NywxMC4zMDFjNC42MjUsMy45NDksNi4yMTUsMTMuNTQ5LDMuOTgyLDIxLjM5NCAgIEM3Ny4wOCw0Mi42OTgsODQuOTMyLDQxLjk1Myw5MCw0My45NzZjLTQuNzM4LTAuNjA5LTExLjIwOS0xLjgwNC0xNy4zMi0xLjM4OGMtMS4xNTgsMC4wNzktMi44NzMtMC4wNDQtMi43ODksMS41ODUgICBjNy4wNzQsMC41NTUsMTQuMTA0LDEuMTYsMTkuOTEyLDIuOTczYy01Ljc2MS0wLjk0MS0xMi43NTQtMi4zNzUtMTkuOTEyLTIuNTc0Yy0yLjk1Nyw1LjgzNS04LjkwOCw4LjcwMy0xNy4xMjMsOS4zMDcgICBjMC44ODMsMS45MjIsMi41NzQsMi42NTMsMi45ODcsNS43NDRjMC42MTYsNC42MTgtMC45NjQsMTEuMzgxLDAuNTk1LDE0LjQ1OWMwLjc0OCwxLjQ3NSwxLjk2NywxLjUxNCwyLjc4OSwyLjc3NSAgIGMtMi4wMTIsMi4zODEtNy0wLjI2OC03LjU2OC0yLjc3NWMtMC45NzMtNC4yOTUsMS40ODItMTAuOTUzLTEuMTkyLTEzLjg2NWMwLjE4OCw0LjY4NS0xLjEwOCwxMS4yNjQsMC4xOTksMTUuNDQ5ICAgYzAuNTE1LDEuNjQ2LDIuMDAyLDIuMjgxLDEuNTkzLDMuNzY2Yy05LjM1MiwwLjk0OS01LjQ0My0xMi4xMDQtNi45NzItMTkuODFjLTEuNDExLDAuMTAxLTAuNzkxLDIuMTEzLTAuNzk2LDIuOTcyICAgYy0wLjA0LDcuNTI0LDEuNTQsMTcuODQ0LTYuNTcsMTYuODM4Yy0wLjIzNy0xLjU4MiwxLjA4OC0yLjExOSwxLjU5My0zLjU2M2MxLjQ3OS00LjIzMy0wLjI3Ny0xMC41NDIsMC40MDEtMTUuNjUxICAgYy0zLjA5NSwyLjMzNCwwLjMyNSwxMC40OC0xLjU5MywxNC42NTdjLTEuMTA1LDIuNDA0LTQuNjY2LDMuNDUtNy4zNjcsMi4zNzdjMC4zNTItMS43OSwyLjItMS41MDEsMi45ODQtMy4xNjkgICBjMS4wOTYtMi4zMjQsMC4wMDgtNS42NzQsMC4zOTktOS4xMTFjLTUuNzI5LDEuMTQ0LTEwLjE3My0wLjE2Ni0xMi4zNDgtMy43NjRjLTAuOTczLTEuNjE1LTEuMjE0LTMuNTItMi4zOS00Ljk1MSAgIGMtMS4xNy0xLjQzMi0zLjA0LTEuNjI1LTMuNTgyLTMuNTYzYzcuMDk1LTEuNzA4LDcuMzY3LDcuMzAyLDEzLjczOSw3LjUyNGMxLjk1NCwwLjA3MSwyLjk3LTAuNTYzLDQuNzc4LTAuOTg4ICAgYzAuNTA2LTIuMjcyLDEuNTg5LTMuOTY3LDMuMTg2LTUuMTUzYy03LjkyOS0xLjA4NS0xNC40NzctMy41NTQtMTcuNTIyLTkuNTA0Yy03LjIwOCwwLjM1NC0xMy44MDQsMS4zMTctMTkuOTEzLDIuNzcxICAgYzUuNTQ1LTIuMDE0LDEyLjM4NC0yLjczNiwxOS43MTUtMi45NzNjLTAuNDMyLTIuNTk2LTQuMjE5LTEuODgyLTYuNTctMS43ODJDOC45NzMsNDIuNzgxLDMuNDczLDQzLjMyNCwwLDQzLjk3NiAgIGM1LjAzNC0xLjc5NSwxMi4wOTgtMS41NzEsMTguOTE4LTEuNTg1Yy0yLjA4Ni02LjU0LTEuMzYzLTE2LjkyOSwzLjE4Ni0yMC43OThDMjAuODE1LDE4LjM0NCwyMS4yMTUsMTMuMDMsMjIuOSwxMC41ICAgYzUuMDc5LDAuMjI4LDguMTU5LDIuNDQzLDExLjM1LDQuNTU3YzMuOTU3LTEuMTI1LDguMTE4LTEuNjg1LDEzLjU0LTEuMzg3YzIuMjgsMC4xMjYsNC42NTEsMS4xNTEsNi4zNjksMC45ODkgICBjMS42ODUtMC4xNTgsMy41NDItMi4wNDksNS4xNzgtMi43NzFDNjEuNDY4LDEwLjk0Nyw2My4yNzEsMTAuNTg4LDY1LjcwOSwxMC41eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                alt="github"
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

SocialToolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SocialToolbar);
