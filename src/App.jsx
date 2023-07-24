import CustomHook from '../src/internship/8th/CustomHook'
import Transversal from '../src/internship/8th/Transversal'
import Dependency from './internship/8th/Dependency/Dependency'
import Dependency_Auth from './internship/8th/Dependency/Dependency_Auth'

const App = () => {
  return (
    <>
      {/* <CustomHook /> */}
      {/* <Transversal /> */}
      <Dependency_Auth />
      <br />
      <Dependency />
    </>
  )
}

export default App
