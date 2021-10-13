import * as C from "./App.style";
import { useState } from "react";
import { Item } from "./types/item";
import { List } from "./components/ListItem";
import { AddArea } from './components/AddArea'
// import * as C from './App.style' importa tudo e sempre uso o C antes
// import { Container } from './App.style'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Comprar Pão",
      done: false
    },
    {
      id: 2,
      name: "Comprar Bolo",
      done: true
    }
  ]);

  const handleAddTask = (taskName: string) => {

    let newList = [...list]

    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })

    setList(newList)

  }

  const handlBoolean = (id: number, done: boolean) => {

    const newList = [...list]

    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done
      }
    }

    setList(newList)


  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Adicionar Tarefa */}
        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => <List item={item} key={index} onChangeTask={handlBoolean} />)}

        {/* Lista de Tarefa */}
      </C.Area>
    </C.Container>
  );
};

export default App;
