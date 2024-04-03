import { Outlet } from 'react-router-dom'
import Layout from './components/layout/Layout'
import MaxWidthWrapper from './components/utilityComponents/MaxWidthWrapper'
import Dashboard from './pages/Dashboard'

function App() {


  return (
    <Layout>
      <MaxWidthWrapper>
        {/* <Dashboard /> */}
        <Outlet/>
      </MaxWidthWrapper>
    </Layout>
  )
}

export default App
