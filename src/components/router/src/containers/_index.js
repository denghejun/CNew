import * as Utility from '@film-night/utility'
import * as Views from '../views/_index'
import RouterContainer from './routerContainer'

Utility.ContainerResolver.resolve(RouterContainer, Views.routerView)

export { RouterContainer }
