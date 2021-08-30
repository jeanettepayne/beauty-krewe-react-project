import React from 'react';
import InfluencerIndex from '../components/InfluencerIndex';
import { connect } from 'react-redux';
import fetchInfluencers from '../actions/fetchInfluencers';

class InfluencersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchInfluencers()    
    }

    render() {
        return(
            <div>
                <InfluencerIndex influencers={this.props.influencers} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        influencers: state.influencers
    }
}

export default connect(mapStateToProps, {fetchInfluencers})(InfluencersContainer);