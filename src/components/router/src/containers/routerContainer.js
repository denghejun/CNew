import actionCreators from '../actions/_index'
import Services from '@film-night/services'

export default class RouterContainer {
  getCurrentLocation() {
    return (dispatch, getState) => {
      dispatch(actionCreators.app.location.fetch.start())
      Services.LocationService.Default.getCurrentCity(
        city => {
          dispatch(actionCreators.app.location.fetch.success({ city: city }))
        },
        error => {
          dispatch(actionCreators.app.location.fetch.failed({ message: error.message }))
        }
      )
    }
  }

  mapStateToProps = (state, ownProps) => {
    return {
      isLocationReady: state.app.location.isReady,
      location: state.app.location.data
    }
  }

  mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onComponentDidMount: dispatch(this.getCurrentLocation())
    }
  }
}
