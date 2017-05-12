import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux';
import createStore from './src/store/_index'
import * as Containers from './src/containers/_index'
import { width, height, totalSize } from 'react-native-dimension'
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.store = createStore();
        this.movieShowingContainer = Containers.MovieShowingContainer.connect();
        this.movieComingContainer = Containers.MovieComingContainer.connect();
        this.movieSearchContainer = Containers.MovieSearchContainer.connect();
    }

    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
    }

    _renderDotIndicator() {
        return <PagerDotIndicator selectedDotStyle={{ backgroundColor: 'orange', transform: [{ scale: 2 }] }} pageCount={3} />;
    }

    _renderTabIndicator() {
        let tabs = [{
            text: '正在上映',
            iconSource: require('./src/assets/image/icon_movie_showing_x16.png'),
            selectedIconSource: require('./src/assets/image/icon_movie_showing_x16_selected.png'),
        }, {
            text: '即将上映',
            iconSource: require('./src/assets/image/icon_movie_coming_x16.png'),
            selectedIconSource: require('./src/assets/image/icon_movie_coming_x16_selected.png'),
        }, {
            text: '电影搜索',
            iconSource: require('./src/assets/image/icon_movie_search_x16.png'),
            selectedIconSource: require('./src/assets/image/icon_movie_search_x16_selected.png'),
        }];
        return <PagerTabIndicator
            textStyle={{ fontFamily: 'Cochin', fontSize: 10 }}
            selectedTextStyle={{ color: '#1296db', fontFamily: 'Cochin', fontSize: 10 }}
            tabs={tabs} />;
    }

    render() {
        return (
            <Provider store={this.store}>
                <View style={{ flex: 1 }}>
                    <IndicatorViewPager scrollEnabled={true}
                        style={{ height: height(100) }}
                        autoPlayEnable={false}
                        autoPlayInterval={1000}
                        indicator={this._renderTabIndicator()}>
                        <View style={{ flex: 1 }}>
                            <this.movieShowingContainer />
                        </View>

                        <View style={{ flex: 1 }}>
                            <this.movieComingContainer />
                        </View>

                        <View style={{ flex: 1 }}>
                            <this.movieSearchContainer />
                        </View>
                    </IndicatorViewPager>
                </View>
            </Provider>
        );
    }
}