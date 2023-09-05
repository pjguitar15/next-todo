import TodoItem from './TodoItem'

const getTodos = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/todos`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch todos')
    }

    return res.json()
  } catch (error) {
    console.log('Error loading todos: ', error)
  }
}

const ShowTodoItems = async () => {
  const { todos } = await getTodos()
  console.log(todos)

  return (
    <div>
      <h5 className='mb-5'>Here are all the todo items:</h5>
      <div className='grid grid-cols-2 gap-2'>
        {todos
          .map((item: any) => (
            <TodoItem
              key={item._id}
              id={item._id}
              item={item.item}
              isCompleted={item.isCompleted}
            />
          ))
          .reverse()}
      </div>
    </div>
  )
}

export default ShowTodoItems
