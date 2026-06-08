import './App.css'
import './styles/theme.css'
import './styles/global.css'

import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { Count } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'
import { Cycles } from './components/Cycles'
import { DefaultButton } from './components/DefaultButton'
import { PlayCircleIcon } from 'lucide-react';

export function App() {

  return ( <>
    <Container><Logo/></Container>
    <Container><Menu/></Container>
    <Container><Count/></Container>
    <Container>
      <form className='form' action="">
        <div className='formRow'>
          <DefaultInput id='meuInput' type='text' placeholder='Digite algo' />
        </div>

        <div className='formRow'>
          <p>Nesse ciclo foque por 25 min.</p>
        </div>

        <Cycles></Cycles>

        <DefaultButton icon={<PlayCircleIcon/>}> </DefaultButton>

      </form>
      </Container>
  </>
  )
}