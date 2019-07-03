import React, {Component} from 'react';
import {Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

class Home extends Component {
  componentDidMount () {
    // console.log("test device", this.props);
  }
  render () { 
    return ( 
      <SafeAreaView>
        <Text> This is Home Screen </Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.appConfig
});
export default connect(mapStateToProps)(Home);