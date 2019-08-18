import { connect } from 'react-redux';
import CCListingsLatest from './CCListingsLatest';
import { fetchCCListingsLatest } from './state/actions';
import { getCCListingsLatestSelector } from './state/selectors';

const mapStateToProps = state => {
  const ccListingsLatest = getCCListingsLatestSelector(state);
  return {
    ...ccListingsLatest
  };
};
const mapDispatchToProps = { fetchCCListingsLatest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CCListingsLatest);
