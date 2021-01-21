import React, { Component } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, ScrollView, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { PlaceholderDataAction } from '../store/actions';

class JsonApi extends Component {
  constructor() {
    super();
    this.state = {
      jsonData: []
    }
  }

  callAction = async () => {
    await this.props.getPlaceholderData();
  }
  render() {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: '#dbebfe' }}>
          <View style={{ flexDirection: 'column', flexGrow: 1 }}>
            <View style={{ height: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity style={{ backgroundColor: 'orange', height: 40, width: 150, alignItems: 'center', borderRadius: 20, justifyContent: 'center' }} onPress={this.callAction}>
                {!this.props.isLoading ?
                  <Text>Get Data</Text>
                  :
                  <ActivityIndicator size='small' color='blue' />
                }
              </TouchableOpacity>
            </View>
            <View style={{ flexGrow: 1 }}>
              {this.props.apiJsonReducerData.length ?
                this.props.apiJsonReducerData?.map((item, index) => {
                  return (
                    <View key={index} style={{ marginVertical: 20, marginHorizontal: 20, padding: 10, borderWidth: 1, borderRadius: 10 }}>
                      <Text>{'address : ' + item?.address?.city}</Text>
                      <Text>{'company : ' + item?.company?.bs}</Text>
                      <Text>{'email : ' + item?.email}</Text>
                      <Text>{'name : ' + item?.name}</Text>
                      <Text>{'website : ' + item?.website}</Text>
                    </View>
                  )
                })
                :
                <Text>No data exist please git get data button</Text>
              }
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('=========>', state?.getPlaceholderData)
  return {
    apiJsonReducerData: state.getPlaceholderData,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlaceholderData: () => dispatch(PlaceholderDataAction.GetPlaceholderDataAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JsonApi);