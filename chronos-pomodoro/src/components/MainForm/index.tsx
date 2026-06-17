import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
    return (
        <form className='form' action="">
        <div className='formRow'>
          <DefaultInput id='meuInput' type='text' placeholder='Digite algo' />
        </div>

        <div className='formRow'>
          <p>Nesse ciclo foque por 25 min.</p>
        </div>

        <Cycles/>

        <DefaultButton icon={<PlayCircleIcon/>} color='green'/> 

      </form>
    )
}