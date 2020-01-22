import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import base from './base'
import ibew120 from './ibew120'
import R from 'ramda'
console.log(createMuiTheme())
// export default {
//   ...createMuiTheme(),
//   ...base,
// }

// export default base
// export default R.mergeDeepRight(createMuiTheme(), base)
export default createMuiTheme({ ...base, ...ibew120 })
