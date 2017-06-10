import React from 'react'
import { PagerTabIndicator, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager'

export default class TabIndicatorFactory {
  static renderTitleIndicator() {
    return <PagerTitleIndicator titles={['正在上映', '即将上映', '电影搜索']} />
  }

  static renderDotIndicator() {
    return (
      <PagerDotIndicator selectedDotStyle={{ backgroundColor: 'orange', transform: [{ scale: 2 }] }} pageCount={3} />
    )
  }

  static renderTabIndicator() {
    let tabs = [
      {
        text: '正在上映',
        iconSource: require('../assets/image/icon_movie_showing_x16.png'),
        selectedIconSource: require('../assets/image/icon_movie_showing_x16_selected.png')
      },
      {
        text: '即将上映',
        iconSource: require('../assets/image/icon_movie_coming_x16.png'),
        selectedIconSource: require('../assets/image/icon_movie_coming_x16_selected.png')
      },
      {
        text: '电影搜索',
        iconSource: require('../assets/image/icon_movie_search_x16.png'),
        selectedIconSource: require('../assets/image/icon_movie_search_x16_selected.png')
      }
    ]
    return (
      <PagerTabIndicator
        textStyle={{ fontFamily: 'Cochin', fontSize: 10 }}
        selectedTextStyle={{ color: '#1296db', fontFamily: 'Cochin', fontSize: 10 }}
        tabs={tabs}
      />
    )
  }
}
