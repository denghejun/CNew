import * as Utility from '../../../utility/_index'
import * as Views from '../views/_index'
import RouterContainer from './routerContainer'

Utility.ContainerResolver.resolve(RouterContainer, Views.routerView)

export { RouterContainer }
