import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import toJS from '../../redux/common/toJS';
import * as entityListActions from '../../redux/entity-list/entity-list.actions';
import Entities from './Entities';

const mapDispatchToProps = (dispatch) => ({
  entityListActions: bindActionCreators(entityListActions, dispatch)
});

const mapStateToProps = state => {
  return {
    entity: state.entity
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Entities));





