import * as C from './styles'
import { Item } from '../../types/item'
// import { useState } from 'react'

type Props = {
    item: Item,
    onChangeTask: (id: number, done: boolean) => void
}

export const List = ({ item, onChangeTask }: Props) => {

    // const [isChecked, setIsChecked] = useState(item.done)

    return (
        <C.Container done={item.done}>
            <input type="checkbox" checked={item.done} onChange={e => onChangeTask(item.id, e.target.checked)} />
            <label htmlFor="">{item.name}</label>
        </C.Container>
    )
}