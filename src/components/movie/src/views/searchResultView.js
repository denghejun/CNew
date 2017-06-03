import React from 'react'
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import * as Animatable from 'react-native-animatable'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'
import Modal from 'react-native-modalbox'
import * as Styles from '../styles/_index'
import Config from 'react-native-config'

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
        const { result, isLoading } = this.props;
        const isInit = result === undefined;
        if(isLoading) {
          return (
              <View style={[Styles.common.centerContainer]}>
                  <Text style={Styles.showingMovie.errorText}>
                      {Config.TEXT_MOVIE_SEARCHING}
                  </Text>
                  <ActivityIndicator animating={true} />
              </View>
          )
        }
        else if (isInit) {
            return (
                <View style={[Styles.common.centerContainer]}>
                    <Text style={Styles.showingMovie.errorText}>
                        {Config.TEXT_MOVIE_TRY_SEARCH}
                    </Text>
                </View>
            )
        }
        else {
            const { onMoviePlayPress, result: { cover, title, desc, tag, year, rating, area, dir, act, playlinks } } = this.props;
            const movieFormatedName = title + ' (' + area + ',' + year + ')';

            return (
                <Modal
                    style={Styles.searchMovie.movieSearchResultModal}
                    swipeToClose={false}
                    isOpen={!isLoading}>
                    <View style={[Styles.common.container]}>
                        <HeaderImageScrollView
                            maxHeight={200}
                            fadeOutForeground={true}
                            maxOverlayOpacity={0.7}
                            renderFixedForeground={() => (
                                <Animatable.View
                                    style={Styles.searchMovie.movieHeader}
                                    ref={c => this.movieHeaderTextContainer = c}>
                                    <TouchableOpacity
                                        style={Styles.searchMovie.movieHeaderTouchContainer}
                                        onPress={() => onMoviePlayPress(playlinks)}>
                                        <Image
                                            style={Styles.searchMovie.movieHeaderPlayIcon}
                                            source={require('../assets/image/icon_movie_play_x64.png')}
                                        />

                                        <Text style={[Styles.searchMovie.movieHeaderText]}>
                                            {movieFormatedName}
                                        </Text>
                                    </TouchableOpacity>
                                </Animatable.View>
                            )}

                            renderForeground={() => (
                                <Animatable.View
                                    style={Styles.common.centerContainer}
                                >
                                    <TouchableOpacity
                                        style={Styles.searchMovie.movieHeaderTouchContainer}
                                        onPress={() => onMoviePlayPress(playlinks)}>
                                        <Image
                                            style={Styles.searchMovie.movieHeaderPlayIcon}
                                            source={require('../assets/image/icon_movie_play_x64.png')}
                                        />

                                        <Text style={[Styles.searchMovie.movieHeaderText]}>
                                            {movieFormatedName}
                                        </Text>
                                    </TouchableOpacity>
                                </Animatable.View>
                            )}

                            renderHeader={() => (
                                <Image
                                    style={Styles.searchMovie.movieItemImage}
                                    source={{ uri: cover }}
                                />
                            )}>

                            <View style={Styles.common.paddingContainer}>
                                <TriggeringView
                                    onDisplay={() => this.movieHeaderTextContainer.fadeOut(100)}
                                    onBeginHidden={() => this.movieHeaderTextContainer.fadeInUp(200)}>
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
                                </TriggeringView>
                            </View>
                        </HeaderImageScrollView>
                    </View>
                </Modal>
            )
        }
    }
}
