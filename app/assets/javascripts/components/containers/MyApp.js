import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage1';
import * as MyActions from '../actions/my_actions';

function mapStateToProps(state) {
  return {
    details: state.details
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MyActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
