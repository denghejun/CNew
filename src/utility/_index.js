export { default as ContainerResolver } from './containerResolver'
export { default as Browser } from './browser'

export default class Utility {
  static isEmpty(value) {
    return value === undefined || value === '' || value === null || value.length === 0
  }
}
