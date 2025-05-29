import { useEffect, useState } from "react"
import axios from "axios"

export function Exemplo2() {

    const [cep, setCep] = useState("")
    const [lougradouro, setLougradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [uf, setUf] = useState("")

    useEffect(() => {
       if(cep.length === 8){
        axios.get(`https://viacep.com.br/ws/${cep}/json`).then((response) => {
            setLougradouro(response.data.logradouro)
            setBairro(response.data.bairro)
            setCidade(response.data.localidade)
            setEstado(response.data.estado)
            setUf(response.data.uf)
            setCidade(response.data.cidade)
        })
       }
    }, [cep] )
    return(
        <section>
            <h2>Exemplo 2: Buscar Endereço</h2>

            <div>
                <input type="number" placeholder="Digite seu CEP" onChange={(input) => setCep(input.target.value)} />

                {cep.length === 8 && (
                    <>
                    <h3>Informações sobre o CEP:</h3>
                    <ul>
                       <li>Lougradouro: {lougradouro}</li>
                       <li>Bairro: {bairro}</li>
                       <li>Cidade: {cidade}</li>
                       <li>Estado: {estado} - {uf}</li>
                    </ul>
                    </>
                )}
            </div>
        </section>
    )
}
