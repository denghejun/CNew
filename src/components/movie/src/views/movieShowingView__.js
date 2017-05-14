import React from 'react'
import { View, Text, Image, ActivityIndicator, WebView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import FlipCard from 'react-native-flip-card'
import { width, height, totalSize } from 'react-native-dimension'
import SGListView from 'react-native-sglistview'

export default class MovieShowingView extends React.Component {
    componentDidMount() {
        this.props.onComponentDidMount();
        this.state = { clickable: false }
    }

    renderRow = (rowData, sectionID, rowID) => {
        const iconAddress = rowData.iconaddress.substring(0, rowData.iconaddress.indexOf('?'));
        return (
            <FlipCard style={{ borderColor: 'transparent' }} clickable={false} flip={this.state.clickable}>
                <View style={{
                    height: height(100),
                    width: width(100), backgroundColor: 'red', flex: 1, justifyContent: 'center', alignItems: 'center'
                }}>
                    <TouchableWithoutFeedback onPress={() => { this.setState({ clickable: !this.state.clickable }) }}>
                        <Image source={{ uri: iconAddress }} style={{
                            height: height(100),
                            width: width(100),
                            resizeMode: 'stretch',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flex: 1, width: width(100), height: height(100) }}>
                    <TouchableOpacity style={{ height:height(5),opacity:0.7, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }} onPress={() => { this.setState({ clickable: !this.state.clickable }) }}>
                        <Text style={{color:'white',fontWeight:'bold'}}>返回</Text>
                    </TouchableOpacity>
                    <WebView injectedJavaScript={'$(function(){if($("#showAllTitle").attr("namecn")==="' + rowData.star.data[1].name + '"){$(".h_btn_back").hide();};$(".i_h_collection").hide();$("#shareButton").hide();$("#closeCientAd").click()})'}
                        source={{ uri: rowData.star.data.m_1.link }}
                    />
                </View>
            </FlipCard>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ActivityIndicator style={{ justifyContent: 'center', alignItems: 'center' }} animating={this.props.isLoading} color='white' />
                <SGListView
                    dataSource={this.props.showingMovieDataSource}
                    renderRow={this.renderRow}
                    initialListSize={2}
                    stickyHeaderIndices={[]}
                    onEndReachedThreshold={10000}
                    scrollRenderAheadDistance={1}
                    pageSize={1}
                >
                </SGListView>
            </View>
        )
    }
}