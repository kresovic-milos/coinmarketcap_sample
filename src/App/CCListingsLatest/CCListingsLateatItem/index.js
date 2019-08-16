import { connect } from 'react-redux';
import { getCCLatest } from '../state/selectors';
import CCListingsLatestItem from './CCListingsLatestItem';

const mapStateToProps = (state, { ccId }) => ({ ...getCCLatest(state, ccId) });

export default connect(mapStateToProps)(CCListingsLatestItem);
