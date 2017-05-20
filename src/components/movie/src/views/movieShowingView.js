import React, { Component, } from 'react'
import { width, height, totalSize } from 'react-native-dimension'
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
    RefreshControl,
    Image,
    ActivityIndicator,
    ProgressBarAndroid,
    ActivityIndicatorIOS,
    Platform,
    TouchableOpacity
} from 'react-native'

export default class MovieShowingView extends React.Component {
    componentDidMount() {
        if (this.props.onComponentDidMount !== undefined) {
            this.props.onComponentDidMount();
        }
    }

    renderRow = (rowData, sectionID, rowID) => {
        const movieItemImageUrl = rowData.iconaddress.substring(0, rowData.iconaddress.indexOf('?'));
        const movieItemFlipFlag = this.props.movieItemStates[Number.parseInt(rowID)];
        const movieItemFlipFrictions = movieItemFlipFlag ? [30, 6] : [6, 30];

        return (
            <View style={Styles.showingMovie.thumbnail}>
                <View>
                    <TouchableOpacity onPress={() => this.props.onMovieItemFlipped(rowID)}>
                        <FlipCard friction={movieItemFlipFrictions[0]} clickable={false} flip={movieItemFlipFlag} style={Styles.showingMovie.flipCard}>
                            <View>
                                <Image source={{ uri: movieItemImageUrl }} style={Styles.showingMovie.movieItemImage} />
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
                        <FlipCard friction={movieItemFlipFrictions[1]} clickable={false} flip={!movieItemFlipFlag} style={Styles.showingMovie.flipCard}>
                            <View>
                                <Image source={{ uri: movieItemImageUrl }} style={Styles.showingMovie.movieItemImage} />
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

    render() {
        return (
            <View style={Styles.showingMovie.body}>
                <ListView
                    dataSource={this.props.showingMovieDataSource}
                    renderRow={this.renderRow}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.isLoading}
                            onRefresh={this.props.onRefresh}
                            tintColor='#ccc'
                            title='loading...'
                            titleColor='#ccc'
                        />
                    }
                />
            </View>
        )
    }
}