import React from "react";
import PropTypes from "prop-types";

export function TableRenderer(props) {
  var columns = props.columns || [];
  var rows = props.rows || [];
  var getRowKey = props.getRowKey;

  return React.createElement(
    "table",
    {},
    React.createElement(
      "thead",
      {},
      React.createElement(
        "tr",
        null,
        columns.map(function(column) {
          var caption = column.caption;
          return React.createElement("th", { key: caption }, caption);
        })
      )
    ),
    React.createElement(
      "tbody",
      null,
      rows.map(function(row) {
        return React.createElement(
          "tr",
          { key: getRowKey(row) },
          columns.map(function(_ref4, index) {
            var render = _ref4.render;
            return React.createElement("td", { key: index }, render(row));
          })
        );
      })
    )
  );
}

TableRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired
    })
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  getRowKey: PropTypes.func.isRequired
};

export default TableRenderer;
