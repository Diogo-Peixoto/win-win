import { useEffect, useState } from 'react'
import './App.css'
import { Box1, Container, Result } from './styles'
import { oddsArray } from './data'
import { WinWin } from './WinWin'

function App() {
  const [oddT1, setOddT1] = useState("")
  const [valorT1, setValorT1] = useState("")

  const [oddT2, setOddT2] = useState("")
  const [valorT2, setValorT2] = useState("")

  const [ganhoT1, setGanhoT1] = useState(0)
  const [ganhoT2, setGanhoT2] = useState(0)

  useEffect(() => {
    setGanhoT1(parseFloat(oddT1) * parseFloat(valorT1) - parseFloat(valorT1) - parseFloat(valorT2))
    setGanhoT2(parseFloat(oddT2) * parseFloat(valorT2) - parseFloat(valorT2) - parseFloat(valorT1))

  }, [oddT1, oddT2, valorT1, valorT2])

  //Ganhar o mesmo nos dois times
  //Mais de uma entrada

  if (true) {
    return <WinWin />
  }

  /* return (
    <Container>
      <section>
        <div>
          <h3>Time 1</h3>
          <Box1>
            <div>
              <label htmlFor="">Odd</label>
              <input type="text" value={oddT1} onChange={(e) => {
                setOddT1(e.target.value)
              }} />
            </div>

            <div>
              <label htmlFor="">Valor</label>
              <input type="text" value={valorT1} onChange={(e) => {
                setValorT1(e.target.value)
              }} />
            </div>
          </Box1>

        </div>

        <div>
          <h3>Time 2</h3>
          <Box1>
            <div>
              <label htmlFor="">Odd</label>
              <input type="text" value={oddT2} onChange={(e) => {
                setOddT2(e.target.value)
              }} />
            </div>

            <div>
              <label htmlFor="">Valor</label>
              <input type="text" value={valorT2} onChange={(e) => {
                setValorT2(e.target.value)
              }} />
            </div>
          </Box1>
        </div>
      </section>

      <Result>
        <p>Ganho T1 : {oddT1} x {valorT1} - {valorT1} - {valorT2} : <b>${ganhoT1}</b></p>
        <p>Ganho T2 : {oddT2} x {valorT2} - {valorT2} - {valorT1} : <b>${ganhoT2}</b></p>
      </Result>

      <ul>
        {
          oddsArray.map(element => {
            if (element * parseFloat(valorT2) - parseFloat(valorT2) - parseFloat(valorT1) > 0) {
              return <li>{element} : {element * parseFloat(valorT2) - parseFloat(valorT2) - parseFloat(valorT1)}</li>
            }
          })
        }
      </ul>
    </Container>
  ) */
}

export default App
