import React from 'react'
import { View, Text, Image } from 'react-native'
import Services from '../../services/movie/_index'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = { img: ' ' }
    }

    componentDidMount() {
        Services.movieRecommendService.getRecommandMovies().then(response => {
            let uri = response.result.data[1].data[0].iconaddress;
            this.setState({ img: uri.substring(0, uri.indexOf('?')) });
        })
    }

    render() {
        return (
            <View>
                <Image style={{
                    height: 200,
                    resizeMode: 'stretch',
                }} source={{ uri: this.state.img }} />
            </View>
        )
    }
}