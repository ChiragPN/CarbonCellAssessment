import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Organisation from './components/Organisation'
import Assets from './components/Assets'
import Trade from './components/Trade'
import History from './components/History'
import Wallet from './components/Wallet'
import NoMatch from './components/NoMatch'

function App() {

  return (
    <div className='App bg-black min-h-[100vh] flex'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='organisation' element={<Organisation/>} />
        <Route path='assets' element={<Assets/>} />
        <Route path='trade' element={<Trade/>} />
        <Route path='history' element={<History/>} />
        <Route path='Wallet' element={<Wallet/>} />
        <Route path='*' element={<NoMatch/>} />
      </Routes>
    </div>
  )
}

export default App