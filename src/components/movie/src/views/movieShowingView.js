import React, { Component, } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Alert,
    ScrollView,
    ListView,
    Image,
    ActivityIndicator,
    ProgressBarAndroid,
    ActivityIndicatorIOS,
    Platform,
    TouchableOpacity
} from 'react-native'
import { width, height, totalSize } from 'react-native-dimension'
import PullToRefreshListView from 'react-native-smart-pull-to-refresh-listview'
import FlipCard from 'react-native-flip-card'
import Spinner from 'react-native-spinkit'

export default class MovieShowingView extends React.Component {
    componentDidMount() {
        this.props.onComponentDidMount();
    }

    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <View style={styles.thumbnail}>
                <View>
                    <FlipCard style={{
                        height: height(36),
                        width: width(46),
                        borderColor: 'transparent'
                    }}>
                        <View>
                            <Image source={{ uri: rowData.iconaddress.substring(0, rowData.iconaddress.indexOf('?')) }}
                                style={{
                                    height: height(35),
                                    width: width(45),
                                }} />
                        </View>
                        <View>
                            <Text>{rowData.tvTitle}</Text>
                            <Text>{rowData.story.data.storyBrief}</Text>
                        </View>
                    </FlipCard>

                </View>

                <View style={{
                    flex: 1,
                }}>
                    <TouchableOpacity>
                        <Text>{rowData.subHead}</Text>
                        <Text>{rowData.playDate.showname}</Text>
                        <Text>{rowData.playDate.data}</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }

    _renderHeader = (viewState) => {
        let { pullState, pullDistancePercent } = viewState
        let { refresh_none, refresh_idle, will_refresh, refreshing, } = PullToRefreshListView.constants.viewState
        pullDistancePercent = Math.round(pullDistancePercent * 100)
        switch (pullState) {
            case refresh_none:
                return (
                    <View style={{ height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', }}>
                        <Text style={{ fontSize: 10, color: 'gray' }}>刷新成功！</Text>
                    </View>
                )
            case refresh_idle:
                return (
                    <View style={{ height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', }}>
                        <Text style={{ fontSize: 10, color: 'gray' }}>加油！{pullDistancePercent}%</Text>
                    </View>
                )
            case will_refresh:
                return (
                    <View style={{ height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', }}>
                        <Text style={{ fontSize: 10, color: 'gray' }}>可以松开啦！{pullDistancePercent > 100 ? 100 : pullDistancePercent}%</Text>
                    </View>
                )
            case refreshing:
                return (
                    <View style={{ flexDirection: 'column', height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', }}>
                        <Spinner type='FadingCircleAlt' size={20} color='#cccccc' />
                        {/*<Text style={{ fontSize: 10, color: 'gray' }}>正在获取数据 ...</Text>*/}
                    </View>
                )
        }
    }

    _renderFooter = (viewState) => {
        let { pullState, pullDistancePercent } = viewState
        let { load_more_freezing, load_more_none, load_more_idle, will_load_more, loading_more, loaded_all, } = PullToRefreshListView.constants.viewState
        pullDistancePercent = Math.round(pullDistancePercent * 100)
        switch (pullState) {
            case load_more_none:
                return (
                    <View style={{ height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', }}>
                        <Text style={{ fontSize: 10, color: 'gray' }}>加载成功！</Text>
                    </View>
                )
            case load_more_idle:
                return (
                    <View style={{ height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', }}>
                        <Text style={{ fontSize: 10, color: 'gray' }}>加油！{pullDistancePercent}%</Text>
                    </View>
                )
            case will_load_more:
                return (
                    <View style={{ height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', }}>
                        {/*<Text>可以松开啦！{pullDistancePercent > 100 ? 100 : pullDistancePercent}%</Text>*/}
                        <Spinner type='FadingCircleAlt' size={20} color='#cccccc' />
                    </View>
                )
            case loading_more:
                return (
                    <View style={{ flexDirection: 'row', height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', }}>
                        {/*<Spinner type='FadingCircleAlt' size={20} color='#cccccc'/>*/}
                        <Text style={{ fontSize: 10, color: 'gray' }}>正在获取数据 ...</Text>
                    </View>
                )
            case loaded_all:
                return (
                    <View style={{ height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', }}>
                        <Text style={{ fontSize: 10, color: 'gray' }}>没有啦</Text>
                    </View>
                )
        }
    }

    onRefresh = () => {
        this.props.onRefresh();
        this._pullToRefreshListView.endRefresh();
    }

    _onLoadMore = () => {
        this.props.onLoadMore();
        this._pullToRefreshListView.endLoadMore(false)
    }

    render() {
        return (
            <View style={{ flex: 1, paddingTop: 60 }}>
                <PullToRefreshListView
                    ref={(component) => this._pullToRefreshListView = component}
                    viewType={PullToRefreshListView.constants.viewType.listView}
                    //contentContainerStyle={{ backgroundColor: 'yellow', }}
                    initialListSize={10}
                    enableEmptySections={true}
                    dataSource={this.props.showingMovieDataSource}
                    pageSize={10}
                    renderRow={this._renderRow}
                    renderHeader={this._renderHeader}
                    renderFooter={this._renderFooter}
                    //renderSeparator={(sectionID, rowID) => <View style={styles.separator} />}
                    onRefresh={this.onRefresh}
                    onLoadMore={this._onLoadMore}
                    pullUpDistance={100}
                    pullUpStayDistance={100}
                    pullDownDistance={100}
                    pullDownStayDistance={100}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemHeader: {
        height: 35,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        backgroundColor: 'blue',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        // height: 60,
        //borderBottomWidth: StyleSheet.hairlineWidth,
        //borderBottomColor: '#ccc',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },

    contentContainer: {
        // paddingTop: 20 + 44,
    },

    thumbnail: {
        marginLeft: 6,
        marginRight: 6,
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textContainer: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})