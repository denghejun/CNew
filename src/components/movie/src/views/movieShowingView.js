import React, { Component, } from 'react'
import { width, height, totalSize } from 'react-native-dimension'
import FlipCard from 'react-native-flip-card'
import Spinner from 'react-native-spinkit'
import * as Styles from '../styles/_index'
import Button from 'react-native-button'
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
    TouchableOpacity,
    processColor
} from 'react-native'

export default class MovieShowingView extends React.Component {
    componentDidMount() {
        if (this.props.onComponentDidMount !== undefined) {
            this.props.onComponentDidMount();
        }
    }

    renderRow = (rowData, sectionID, rowID) => {
        const movieItemImageUrl = rowData.iconaddress.substring(0, rowData.iconaddress.indexOf('?'));
        const movieItemFlipFlag = this.props.movieItemStates.showing[Number.parseInt(rowID)];

        return (
            <View style={Styles.showingMovie.thumbnail}>
                <View style={Styles.common.container}>
                    <TouchableOpacity onPress={() => this.props.onMovieItemFlipped(rowID)}>
                        <FlipCard flipHorizontal={true} friction={45} clickable={false} flip={movieItemFlipFlag} style={Styles.showingMovie.flipCard}>
                            <View>
                                <Image source={{ uri: movieItemImageUrl }} style={Styles.showingMovie.movieItemImage} />
                            </View>
                            <View >
                                <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                    <Text style={Styles.showingMovie.movieSubHeader}>{rowData.director.showname}</Text>
                                </View>
                                <Text style={Styles.showingMovie.movieSubText}>{rowData.director.data[1].name}</Text>

                                <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                    <Text style={Styles.showingMovie.movieSubHeader}>{rowData.star.showname}</Text>
                                </View>
                                {
                                    Object.keys(rowData.star.data).filter(o => rowData.star.data[o].name !== undefined).map(k => {
                                        return (<Text key={k} style={Styles.showingMovie.movieSubText}>{rowData.star.data[k].name}</Text>
                                        )
                                    })
                                }
                            </View>
                        </FlipCard>
                    </TouchableOpacity>

                </View>

                <View style={Styles.common.container}>
                    <TouchableOpacity onPress={() => this.props.onMovieItemFlipped(rowID)}>
                        <FlipCard flipVertical={!movieItemFlipFlag} flipHorizontal={movieItemFlipFlag} friction={45} clickable={false} flip={!movieItemFlipFlag} style={Styles.showingMovie.flipCard}>
                            <View>
                                <Image source={{ uri: movieItemImageUrl }} style={Styles.showingMovie.movieItemImage} />
                            </View>
                            <View >
                                <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                    <Text style={Styles.showingMovie.movieSubHeader}>{rowData.tvTitle}</Text>
                                </View>
                                <Text style={Styles.showingMovie.movieSubText}>{rowData.story.data.storyBrief}</Text>

                                <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                    <Text style={Styles.showingMovie.movieSubHeader}>{rowData.playDate.showname}</Text>
                                </View>
                                <Text style={Styles.showingMovie.movieSubText}>{rowData.playDate.data}</Text>
                                <Text style={Styles.showingMovie.movieSubText}>{rowData.subHead}</Text>
                                <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                    <Text style={Styles.showingMovie.movieSubHeader}>{rowData.more.data[0].name}</Text>
                                </View>
                                <Button
                                    style={Styles.showingMovie.buyButton}
                                    containerStyle={Styles.showingMovie.buyButtonContainer}
                                    onPress={() => this.props.onBuyButtonPress(rowData.more.data[0].link)}>
                                    {rowData.more.data[0].name}
                                </Button>
                            </View>
                        </FlipCard>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }

    render() {
        if (this.props.hasError) {
            return (
                <View style={Styles.showingMovie.body}>
                    <View style={Styles.showingMovie.errorContainer}>
                        <Image style={Styles.showingMovie.errorImage} source={require('../assets/image/icon_movie_error_x64.png')} />
                        <Text style={Styles.showingMovie.errorText}>Ah! something goes wrong.</Text>
                    </View>
                </View>
            )
        }
        else {
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
}