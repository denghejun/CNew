import React, { Component, } from 'react'
import { width, height, totalSize } from 'react-native-dimension'
import PullToRefreshListView from 'react-native-smart-pull-to-refresh-listview'
import FlipCard from 'react-native-flip-card'
import Spinner from 'react-native-spinkit'
import * as Styles from '../styles/_index'
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

export default class MovieShowingView extends React.Component {
    componentDidMount() {
        this.props.onComponentDidMount();
    }

    renderRow = (rowData, sectionID, rowID) => {
        const movieItemImageUrl = rowData.iconaddress.substring(0, rowData.iconaddress.indexOf('?'));
        const movieItemFlipFlag = this.props.movieItemStates[Number.parseInt(rowID)];

        return (
            <View style={Styles.showingMovie.thumbnail}>
                <View>
                    <TouchableOpacity onPress={() => this.props.onMovieItemFlipped(rowID)}>
                        <FlipCard friction={!movieItemFlipFlag ? 6 : 30} clickable={false} flip={movieItemFlipFlag} style={Styles.showingMovie.flipCard}>
                            <View>
                                <Image source={{ uri: movieItemImageUrl }}
                                    style={Styles.showingMovie.movieItemImage} />
                            </View>
                            <View style={Styles.showingMovie.flipCardBack}>
                                <Text style={Styles.showingMovie.movieName}>{rowData.tvTitle}</Text>
                                <Text style={Styles.showingMovie.storyBrief}>{rowData.story.data.storyBrief}</Text>
                            </View>
                        </FlipCard>
                    </TouchableOpacity>

                </View>

                <View style={Styles.common.container}>
                    <TouchableOpacity onPress={() => this.props.onMovieItemFlipped(rowID)}>
                        <FlipCard friction={movieItemFlipFlag ? 6 : 30} clickable={false} flip={!movieItemFlipFlag} style={Styles.showingMovie.flipCard}>
                            <View>
                                <Image source={{ uri: movieItemImageUrl }}
                                    style={Styles.showingMovie.movieItemImage} />
                            </View>
                            <View style={Styles.showingMovie.flipCardBack}>
                                <Text>{rowData.subHead}</Text>
                                <Text>{rowData.playDate.showname}</Text>
                                <Text>{rowData.playDate.data}</Text>
                            </View>
                        </FlipCard>
                    </TouchableOpacity>


                </View>
            </View >
        )
    }

    renderRefreshHeader = (viewState) => {
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
                    </View>
                )
        }
    }

    renderRefreshFooter = (viewState) => {
        let { pullState, pullDistancePercent } = viewState
        let { load_more_freezing, load_more_none, load_more_idle, will_load_more, loading_more, loaded_all } = PullToRefreshListView.constants.viewState
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
                        <Spinner type='FadingCircleAlt' size={20} color='#cccccc' />
                    </View>
                )
            case loading_more:
                return (
                    <View style={{ flexDirection: 'row', height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', }}>
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
        this.pullToRefreshListView.endRefresh();
    }

    onLoadMore = () => {
        this.props.onLoadMore();
        this.pullToRefreshListView.endLoadMore(false)
    }

    render() {
        return (
            <View style={Styles.showingMovie.body}>
                <PullToRefreshListView
                    ref={(component) => this.pullToRefreshListView = component}
                    viewType={PullToRefreshListView.constants.viewType.listView}
                    //contentContainerStyle={{ backgroundColor: 'yellow', }}
                    initialListSize={10}
                    enableEmptySections={true}
                    dataSource={this.props.showingMovieDataSource}
                    pageSize={10}
                    renderRow={this.renderRow}
                    renderHeader={this.renderRefreshHeader}
                    renderFooter={this.renderRefreshFooter}
                    //renderSeparator={(sectionID, rowID) => <View style={Styles.showingMovie.separator} />}
                    onRefresh={this.onRefresh}
                    onLoadMore={this.onLoadMore}
                    pullUpDistance={100}
                    pullUpStayDistance={100}
                    pullDownDistance={100}
                    pullDownStayDistance={100}
                />
            </View>
        )
    }
}