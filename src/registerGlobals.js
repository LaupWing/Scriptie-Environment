import registerComponent from './utils/registerComponent'

const requireComponent = require.context(
   './components/Globals',
   true,
   /.+\.(vue|js)$/
)
registerComponent(requireComponent)