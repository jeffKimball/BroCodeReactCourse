import Student from './Student'

function App() {

  return(
    <>
      <Student name="Jefferson" age={30} isStudent={true}/>
      <Student name="Patrick" age={38} isStudent={false}/>
      <Student name="Donovan" age={28} isStudent={true}/>
      <Student name="Mary" age={51} isStudent={true}/>
      <Student name="Larry" />
    </>
  )
}

export default App
