import * as Utility from '../../../utility/_index'
import * as Views from '../views/_index'

import HomeContainer from './homeContainer'

Utility.ContainerResolver.resolve(HomeContainer, Views.homeView)

export { HomeContainer }
