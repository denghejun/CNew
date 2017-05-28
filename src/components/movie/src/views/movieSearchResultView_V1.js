import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import * as Styles from '../styles/_index'
import { Jiro, Isao, Hoshi } from 'react-native-textinput-effects'
import { width, height, totalSize } from 'react-native-dimension'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'
import Modal from 'react-native-modalbox'
import * as Animatable from 'react-native-animatable'
import ParallaxView from 'react-native-parallax-view'

export default class MovieSearchResultView extends React.Component {
    componentDidUpdate() {
        this.hideMovieHeaderTextContainer();
    }

    componentDidMount() {
        this.hideMovieHeaderTextContainer()
    }

    hideMovieHeaderTextContainer() {
        if (this.movieHeaderTextContainer) {
            this.movieHeaderTextContainer.fadeOut(100);
        }
    }

    render() {
        const { result, isLoading, hasError } = this.props;
        const isInit = result === undefined || isLoading;

        if (isInit) {
            const initFriendlyText = 'feel free to search ...';
            return (
                <View style={[Styles.common.centerContainer]}>
                    <Text style={Styles.showingMovie.errorText}>
                        {initFriendlyText}
                    </Text>
                </View>
            )
        }
        else {
            const { onMoviePlayPress, result: { cover, title, desc, tag, year, rating, area, dir, act, playlinks } } = this.props;
            const shouldOpenSearchResultModal = !hasError && !isLoading;
            const movieFormatedName = title + ' (' + area + ',' + year + ')';

            return (

                <ParallaxView
                    backgroundSource={{ uri: cover }}
                    windowHeight={300}
                    header={(
                        <View style={Styles.searchMovie.movieHeaderV_1}>
                            <Text style={[Styles.searchMovie.movieHeaderText]}>
                                {movieFormatedName}
                            </Text>
                        </View>
                    )}
                >
                    <View style={Styles.common.paddingContainer}>
                        <View>
                            <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                <Text style={Styles.showingMovie.movieSubHeader}>{title}</Text>
                            </View>
                            <Text style={Styles.showingMovie.movieSubText}>{desc}</Text>
                        </View>

                        <View>
                            <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                <Text style={Styles.showingMovie.movieSubHeader}>类型</Text>
                            </View>
                            <Text style={Styles.showingMovie.movieSubText}>{tag}</Text>
                        </View>

                        <View>
                            <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                <Text style={Styles.showingMovie.movieSubHeader}>上映时间</Text>
                            </View>
                            <Text style={Styles.showingMovie.movieSubText}>{year}</Text>
                        </View>

                        <View>
                            <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                <Text style={Styles.showingMovie.movieSubHeader}>评分</Text>
                            </View>
                            <Text style={Styles.showingMovie.movieSubText}>{rating || '暂无评分'}</Text>
                        </View>

                        <View>
                            <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                <Text style={Styles.showingMovie.movieSubHeader}>地区</Text>
                            </View>
                            <Text style={Styles.showingMovie.movieSubText}>{area}</Text>
                        </View>

                        <View>
                            <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                <Text style={Styles.showingMovie.movieSubHeader}>导演</Text>
                            </View>
                            <Text style={Styles.showingMovie.movieSubText}>{dir}</Text>
                        </View>

                        <View>
                            <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                <Text style={Styles.showingMovie.movieSubHeader}>演员</Text>
                            </View>
                            <Text style={Styles.showingMovie.movieSubText}>{act}</Text>
                        </View>
                    </View>
                </ParallaxView>
            )
        }
    }
}