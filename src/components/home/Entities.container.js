import Entities from './Entities';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as entityListActionCreators from '../../redux/entity-list/entity-list.actions';

const mapStateToProps = (state) => ({entitiesElements: state.entities});
const mapDispatchToProps = (dispatch) => ({entitiesActions: bindActionCreators(entityListActionCreators, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Entities)

