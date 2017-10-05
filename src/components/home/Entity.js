import React, {
  Component,
  PropTypes,
} from 'react';

class Entity extends Component {
  render() {
    return (
      <tr>
        <td>Changelist / Build</td>
        <td>Owner</td>
        <td>Time Started</td>
        <td>State</td>
        <td>Metrics</td>
        <td>Build</td>
        <td>Unit Test</td>
        <td>Functional Test</td>
      </tr>
    );
  }
}

Entity.propTypes = {};
Entity.defaultProps = {};

export default Entity;
