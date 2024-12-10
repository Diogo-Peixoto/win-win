import { TextField } from "@mui/material"
import { Container, InputBox, List, ListAuto, SectionCapture } from "./styles"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useEffect, useState } from "react"
import { oddsArray } from "../data"
import { ArrayValor } from "./dataValor"


export const WinWin = () => {
    const [oddT1, setOddT1] = useState("0")
    const [valorT1, setValorT1] = useState("0")

    const [oddT2, setOddT2] = useState("0")
    const [valorT2, setValorT2] = useState("0")

    const [ganhoT1, setGanhoT1] = useState(0)
    const [ganhoT2, setGanhoT2] = useState(0)

    const [tela, setTela] = useState(3)


    useEffect(() => {
        const lucroT1 = parseFloat(oddT1) * parseFloat(valorT1) - parseFloat(valorT1) - parseFloat(valorT2)
        const lucroT2 = parseFloat(oddT2) * parseFloat(valorT2) - parseFloat(valorT2) - parseFloat(valorT1)

        setGanhoT1(lucroT1)
        setGanhoT2(lucroT2)

    }, [oddT1, oddT2, valorT1, valorT2])

    const status = ganhoT1 === 0 && ganhoT2 === 0 ? "neutro" : ganhoT1 > 0 && ganhoT2 > 0 ? "positivo" : "negativo"

    return <Container>
        <SectionCapture status={status}>
            <h3>Calcular Manualmente</h3>
            <InputBox>
                <TextField
                    label="Odd 1"
                    id="outlined-size-small"
                    defaultValue="Odd 1"
                    size="small"
                    value={oddT1}
                    onChange={(e) => {
                        setOddT1(e.target.value)
                    }}
                />
                <TextField
                    label="Valor 1"
                    id="outlined-size-small"
                    defaultValue="Valor 1"
                    size="small"
                    value={valorT1}
                    onChange={(e) => {
                        setValorT1(e.target.value)
                    }}
                />

                <p> <ArrowForwardIcon /> R$ {ganhoT1.toFixed(2)}</p>
            </InputBox>
            <InputBox>
                <TextField
                    label="Odd 2"
                    id="outlined-size-small"
                    defaultValue="Odd 1"
                    size="small"
                    value={oddT2}
                    onChange={(e) => {
                        setOddT2(e.target.value)
                    }}
                />
                <TextField
                    label="Valor 2"
                    id="outlined-size-small"
                    defaultValue="Valor 1"
                    size="small"
                    value={valorT2}
                    onChange={(e) => {
                        setValorT2(e.target.value)
                    }}
                />
                <p> <ArrowForwardIcon /> R$ {ganhoT2.toFixed(2)}</p>
            </InputBox>
        </SectionCapture>

        <div>
            <button onClick={() => setTela(1)}>Botão 1</button>
            <button onClick={() => setTela(2)}>Botão 2</button>
            <button onClick={() => setTela(3)}>Botão 3</button>
        </div>

        {tela === 1 && <List>
            <li><p>ODD</p> <p>VALOR</p></li>
            {
                oddsArray.map(element => {
                    if (element * parseFloat(valorT2) - parseFloat(valorT2) - parseFloat(valorT1) > 0) {
                        return <li><p>{element}</p> <p>R$ {element * parseFloat(valorT2) - parseFloat(valorT2) - parseFloat(valorT1)}</p></li>
                    }
                })
            }
        </List>}

        {tela === 2 &&
            <ListAuto>
                <li>
                    <p>Lucro Time A</p>
                    <p>Odd</p> <p>Valor</p>
                    <p>Lucro Time B</p>
                </li>
                {
                    !!parseFloat(oddT2) ?
                        Array.from({ length: 100 }).map((_, valor) => {
                            const a = parseFloat(oddT2) * valor - valor - parseFloat(valorT1)
                            if (a > 10) {
                                if (parseFloat(oddT1) * parseFloat(valorT1) - valor - parseFloat(valorT1) > 10) {
                                    return <li onClick={() => {
                                        setOddT2(`${parseFloat(oddT2)}`)
                                        setValorT2(`${valor}`)
                                    }}>
                                        <p>R$ {(parseFloat(oddT1) * parseFloat(valorT1) - valor - parseFloat(valorT1)).toFixed(2)}</p>
                                        <p>{parseFloat(oddT2)}</p>
                                        <p>{valor}</p>
                                        <p>R$ {(parseFloat(oddT2) * valor - parseFloat(valorT1) - valor).toFixed(2)}</p>

                                    </li>
                                }
                            }
                        }) :
                        oddsArray.map(odd => {
                            return Array.from({ length: 100 }).map((_, valor) => {
                                const a = odd * valor - valor - parseFloat(valorT1)
                                if (a > 10) {
                                    if (parseFloat(oddT1) * parseFloat(valorT1) - valor - parseFloat(valorT1) > 10) {
                                        return <li onClick={() => {
                                            setOddT2(`${odd}`)
                                            setValorT2(`${valor}`)
                                        }}>
                                            <p>R$ {(parseFloat(oddT1) * parseFloat(valorT1) - valor - parseFloat(valorT1)).toFixed(2)}</p>
                                            <p>{odd}</p>
                                            <p>{valor}</p>
                                            <p>R$ {(odd * valor - parseFloat(valorT1) - valor).toFixed(2)}</p>

                                        </li>
                                    }
                                }
                            })

                        })
                }
            </ListAuto>
        }

        {tela === 3 && <ListAuto>
            <li>
                <p>Lucro Time A</p>
                <p>Odd</p> <p>Valor</p>
                <p>Lucro Time B</p>
            </li>
            {
                oddsArray.map(odd => {
                    return ArrayValor.map((_, valor) => {
                        const a = odd * valor - valor - parseFloat(valorT1)
                        if (a > 10) {
                            if (parseFloat(oddT1) * parseFloat(valorT1) - valor - parseFloat(valorT1) > 10) {
                                if (odd * valor - valor - parseFloat(valorT1) === parseFloat(oddT1) * parseFloat(valorT1) - valor - parseFloat(valorT1)) {
                                    return <li onClick={() => {
                                        setOddT2(`${odd}`)
                                        setValorT2(`${valor}`)
                                    }}>
                                        <p>R$ {(parseFloat(oddT1) * parseFloat(valorT1) - valor - parseFloat(valorT1)).toFixed(2)}</p>
                                        <p>{odd}</p>
                                        <p>{valor}</p>
                                        <p>R$ {(odd * valor - parseFloat(valorT1) - valor).toFixed(2)}</p>

                                    </li>
                                }
                            }
                        }
                    })
                })
            }
        </ListAuto>}
    </Container>
}