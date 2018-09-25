import { connect } from 'react-redux';
import Loader from './Loader.jsx';

const mapStateToProps = ({ loading }) => {
  return { loading };
}

export default connect(mapStateToProps, null)(Loader);