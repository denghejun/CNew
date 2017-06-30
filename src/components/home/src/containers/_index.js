import * as Utility from '@film-night/utility'
import * as Views from '../views/_index'

import HomeContainer from './homeContainer'

Utility.ContainerResolver.resolve(HomeContainer, Views.homeView)

export { HomeContainer }
