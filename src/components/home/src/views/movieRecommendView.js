import React from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension'
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';

export default class MovieRecommendView extends React.Component {
    componentDidMount() {
        this.props.onComponentDidMount();
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
            iconSource: require('../assets/image/icon_movie_showing_x16.png'),
            selectedIconSource: require('../assets/image/icon_movie_showing_x16_selected.png'),
        }, {
            text: '即将上映',
            iconSource: require('../assets/image/icon_movie_coming_x16.png'),
            selectedIconSource: require('../assets/image/icon_movie_coming_x16_selected.png'),
        }, {
            text: '电影搜索',
            iconSource: require('../assets/image/icon_movie_search_x16.png'),
            selectedIconSource: require('../assets/image/icon_movie_search_x16_selected.png'),
        }];
        return <PagerTabIndicator
            textStyle={{ fontFamily: 'Cochin', fontSize: 10 }}
            selectedTextStyle={{ color: '#1296db', fontFamily: 'Cochin', fontSize: 10 }}
            tabs={tabs} />;
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <IndicatorViewPager scrollEnabled={true}
                    style={{ height: height(100) }}
                    autoPlayEnable={false}
                    autoPlayInterval={1000}
                    indicator={this._renderTabIndicator()}
                >
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text>正在上映</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text>即将上映</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text>电影搜索</Text>
                    </View>
                </IndicatorViewPager>
                {/*<Image style={{
                    height: height(30),
                    width: width(50),
                    resizeMode: 'stretch',
                }} source={this.props.imageSource}>
                    <ActivityIndicator size='small' color='orange' animating={this.props.isLoading} />
                </Image>
                <Image style={{
                    height: height(30),
                    width: width(50),
                    resizeMode: 'stretch',
                }} source={this.props.imageSource}>
                    <ActivityIndicator size='small' color='orange' animating={this.props.isLoading} />
                </Image>*/}
            </View >
        )
    }
}