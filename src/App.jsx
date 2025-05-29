import { Exemplo1 } from "../components/Exemplo1"
import { Header } from "../components/header"
import  { Exemplo2 } from "../components/Exemplo2"

export function App() {
  return(
    <>
      <Header/>
      <main>
        <Exemplo1/>
        <Exemplo2/>
      </main>
    </>
  )
}