import { AppRegistry } from 'react-native'
import Cache from 'react-native-cache-store'
import Root from '../components/router/_index'
import Services from '../services/_index'
import codePush from 'react-native-code-push'

export default class BootStrapper {
  static init() {
    Cache.flush()
  }

  static launch() {
    const app = codePush(BootStrapper.getCodePushOption())(Root)
    AppRegistry.registerComponent('FilmNight', () => app)
  }

  static start() {
    Promise.resolve()
      .then(() => {
        return BootStrapper.init()
      })
      .then(() => {
        BootStrapper.launch()
      })
      .catch(error => {
        console.log(error)
      })
  }

  static getCodePushOption() {
    return {
      updateDialog: {
        appendReleaseDescription: true,
        descriptionPrefix: 'Release Note: ',
        mandatoryContinueButtonLabel: '好',
        title: '更新',
        optionalUpdateMessage: '发现可用更新，是否立即更新？\r\n',
        mandatoryUpdateMessage: '发现可用更新，建议立即更新。\r\n',
        optionalIgnoreButtonLabel: '不了，谢谢',
        optionalInstallButtonLabel: '安装更新'
      },
      installMode: codePush.InstallMode.IMMEDIATE
    }
  }
}
