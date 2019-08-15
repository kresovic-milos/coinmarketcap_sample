import { connect } from 'react-redux';
import { compose } from 'recompose';
import CCListingsLatest from './CCListingsLatest';
import { fetchCCListingsLatest } from './state/actions';
import { getCCListingsLatest } from './state/selectors';

const mapStateToProps = state => ({ ...getCCListingsLatest(state) });
const mapDispatchToProps = { fetchCCListingsLatest };

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CCListingsLatest);
