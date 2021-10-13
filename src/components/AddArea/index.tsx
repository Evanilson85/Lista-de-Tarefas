import { useState, KeyboardEvent } from 'react'
import * as C from './styles'

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {

    const [task, setTask] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === "Enter" && task !== '') {
            onEnter(task)
            setTask('')
        }
    }

    return (
        <C.Container>
            <div className='image'> + </div>
            <input type="text" placeholder="Adicione uma Tarefa" value={task} onChange={e => setTask(e.target.value)} onKeyUp={handleKeyUp} />
        </C.Container>
    )
}