import React, {Component} from 'react';
import CurrentFires from '../CurrentFires/CurrentFires';
import { fireDataCleaner } from '../../heplers/cleaner/cleaner';
import { currentFireRequest, getUnverifiedFires  } from '../../heplers/apiCalls/apiCalls';
import { storeCurrentFireData } from '../../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';



export class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isLoading: false
    // }
  }

  async componentDidMount() { 
    try {
      // await this.setState({isLoading: true})
      const currentFireData = await currentFireRequest();
      // await this.setState({isLoading: false});
      const cleanedCurrentFireData = fireDataCleaner(currentFireData);
      const firesFromDb = await getUnverifiedFires();      
      this.props.storeCurrentFireData(cleanedCurrentFireData, firesFromDb);
    } catch (error) {
      throw Error(`Couldn\'t retreive the current fires list ${error.message}`);
    }
  }
  style = {
    width: '100%',
    height: '100%'
  }
  render() {
    return (
      <div>
        <CurrentFires
          style = {this.style}/>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  storeCurrentFireData: (cleanedCurrentFireData, firesFromDb) => dispatch(storeCurrentFireData(cleanedCurrentFireData, firesFromDb))
});

export default withRouter(connect(null, mapDispatchToProps)(Home));

Home.propTypes = {
  storeCurrentFireData: PropTypes.func
};

