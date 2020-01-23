import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import base from './base'
// import R from 'ramda'
// console.log(createMuiTheme())
// export default {
//   ...createMuiTheme(),
//   ...base,
// }

// export default base
// export default R.mergeDeepRight(createMuiTheme(), base)
export default createMuiTheme({ ...base })
