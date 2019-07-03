import React from "react";
import PropTypes from "prop-types";

export function PathlineRenderer(props) {
  var children = props.children;

  return React.createElement("pre", {}, children);
}

PathlineRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string
};

export default PathlineRenderer;
