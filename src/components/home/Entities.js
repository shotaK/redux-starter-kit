import React, {
  Component,
  PropTypes,
} from 'react';
import map from 'lodash.map';
import Entity from './Entity';

class Entities extends Component {
  componentDidMount() {
    this.props.entitiesActions.fetchEntities();
  }

  render() {
    const { entities, isFetching } = this.props.entitiesElements;
    return (
      <div className="container">
        <div className="table-responsive">
          {isFetching ? <p>Loading Entities...</p> :
            <table className="table">
              <thead>
              <tr>
                <th>Changelist / Build</th>
                <th>Owner</th>
                <th>Time Started</th>
                <th>State</th>
                <th>Metrics</th>
                <th>Build</th>
                <th>Unit Test</th>
                <th>Functional Test</th>
              </tr>
              </thead>
              <tbody>
              {
                map(entities, (entity, index) => <Entity key={index} entity={entity}/>)
              }
            </tbody>
          </table>
          }
        </div>
      </div>
    );
  }
}

Entities.propTypes = {};
Entities.defaultProps = {};

export default Entities;
