import React, {
  Component,
} from 'react';
import map from 'lodash.map';
import PropTypes from 'prop-types';

import ResultRender from '../shared/ResultRender';
import Entity from './Entity';

class Entities extends Component {
  componentDidMount() {
    this.props.entityListActions.fetchEntities();
  }

  render() {
    const {entity} = this.props;
    return (
      <div className="container">
        <ResultRender entity={entity}>
          <div className="table-responsive">
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
                map(entity.entities, (entity, index) => <Entity key={index} entity={entity}/>)
              }
              </tbody>
            </table>
          </div>
        </ResultRender>
      </div>
    );
  }
}

Entities.propTypes = {
  entitiesActions: PropTypes.object,
  entity: PropTypes.shape({
    isFetching: PropTypes.bool,
    errorMessage: PropTypes.string,
    entities: PropTypes.array
  }),
};
Entities.defaultProps = {};

export default Entities;
