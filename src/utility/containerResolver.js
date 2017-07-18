import { connect } from 'react-redux'

export default class ContainerResolver {
  static resolve(ContainerClass, ViewClass) {
    const container = new ContainerClass()
    if (typeof container.mapDispatchToProps !== 'function') {
      throw new Error('A standard container must have a function named mapDispatchToProps.')
    }

    if (typeof container.mapStateToProps !== 'function') {
      throw new Error('A standard container must have a function named mapStateToProps xxxx.')
    }

    ContainerClass.connect = () => connect(container.mapStateToProps, container.mapDispatchToProps)(ViewClass)
  }
}
