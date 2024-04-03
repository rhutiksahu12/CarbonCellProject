import Layout from './components/layout/Layout'
import MaxWidthWrapper from './components/utilityComponents/MaxWidthWrapper'
import Dashboard from './pages/Dashboard'

function App() {


  return (
    <Layout>
      <MaxWidthWrapper>
        <Dashboard />
      </MaxWidthWrapper>
    </Layout>
  )
}

export default App
