import { connect } from 'react-redux';
import CCListingsLatest from './CCListingsLatest';
import { fetchCCListingsLatest } from './state/actions';
import { getCCListingsLatest } from './state/selectors';

const mapStateToProps = state => ({ ...getCCListingsLatest(state) });
const mapDispatchToProps = { fetchCCListingsLatest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CCListingsLatest);
