import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import * as Styles from '../styles/_index'
import { Jiro, Isao, Hoshi } from 'react-native-textinput-effects'
import { width, height, totalSize } from 'react-native-dimension'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'
import Modal from 'react-native-modalbox'
import * as Animatable from 'react-native-animatable'

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
        return (
            this.props.result === undefined || this.props.isLoading ?
                (
                    <View style={[Styles.common.centerContainer]}>
                        <Text style={Styles.showingMovie.errorText}>{this.props.result === undefined ? 'feel free to search ...' : this.props.result.title}</Text>
                    </View>

                ) : (
                    <Modal style={{ overflow: 'hidden' }} swipeToClose={false} isOpen={!(this.props.isLoading || this.props.result.title === undefined)}>
                        <View style={[Styles.common.container]}>
                            <HeaderImageScrollView
                                maxHeight={200}
                                fadeOutForeground={true}
                                maxOverlayOpacity={0.7}
                                renderFixedForeground={() => (
                                    <Animatable.View style={Styles.searchMovie.movieHeader} ref={c => this.movieHeaderTextContainer = c}>
                                        <TouchableOpacity>
                                            <Text style={{ backgroundColor: 'transparent', color: 'white', fontWeight: 'bold' }}>
                                                {this.props.result.title + ' (' + this.props.result.area + ',' + this.props.result.year + ')'}
                                            </Text>
                                        </TouchableOpacity>
                                    </Animatable.View>
                                )}
                                renderForeground={() => (
                                    <Animatable.View style={Styles.common.centerContainer}>
                                        <TouchableOpacity >
                                            <Text style={{ backgroundColor: 'transparent', color: 'white', fontWeight: 'bold' }}>
                                                {this.props.result.title + ' (' + this.props.result.area + ',' + this.props.result.year + ')'}
                                            </Text>
                                        </TouchableOpacity>
                                    </Animatable.View>
                                )}
                                renderHeader={() => (
                                    <Image style={Styles.searchMovie.movieItemImage} source={{ uri: this.props.result.cover }} />
                                )}>
                                <View style={Styles.common.paddingContainer}>
                                    <TriggeringView
                                        onDisplay={() => this.movieHeaderTextContainer.fadeOut(100)}
                                        onBeginHidden={() => this.movieHeaderTextContainer.fadeInUp(200)}>
                                        <View>
                                            <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                                <Text style={Styles.showingMovie.movieSubHeader}>{this.props.result.title}</Text>
                                            </View>
                                            <Text style={Styles.showingMovie.movieSubText}>{this.props.result.desc}</Text>
                                        </View>

                                        <View>
                                            <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                                <Text style={Styles.showingMovie.movieSubHeader}>类型</Text>
                                            </View>
                                            <Text style={Styles.showingMovie.movieSubText}>{this.props.result.tag}</Text>
                                        </View>

                                        <View>
                                            <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                                <Text style={Styles.showingMovie.movieSubHeader}>上映时间</Text>
                                            </View>
                                            <Text style={Styles.showingMovie.movieSubText}>{this.props.result.year}</Text>
                                        </View>

                                        <View>
                                            <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                                <Text style={Styles.showingMovie.movieSubHeader}>评分</Text>
                                            </View>
                                            <Text style={Styles.showingMovie.movieSubText}>{this.props.result.rating || '暂无评分'}</Text>
                                        </View>

                                        <View>
                                            <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                                <Text style={Styles.showingMovie.movieSubHeader}>地区</Text>
                                            </View>
                                            <Text style={Styles.showingMovie.movieSubText}>{this.props.result.area}</Text>
                                        </View>

                                        <View>
                                            <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                                <Text style={Styles.showingMovie.movieSubHeader}>导演</Text>
                                            </View>
                                            <Text style={Styles.showingMovie.movieSubText}>{this.props.result.dir}</Text>
                                        </View>

                                        <View>
                                            <View style={Styles.showingMovie.movieSubHeaderContainer}>
                                                <Text style={Styles.showingMovie.movieSubHeader}>演员</Text>
                                            </View>
                                            <Text style={Styles.showingMovie.movieSubText}>{this.props.result.act}</Text>
                                        </View>
                                    </TriggeringView>
                                </View>
                            </HeaderImageScrollView>
                        </View>
                    </Modal>
                )
        )
    }
}