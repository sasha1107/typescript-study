import { useEffect, useState, useCallback, MouseEvent, KeyboardEvent, useMemo, useRef } from 'react'

interface User {
  id: number,
  name: string
}

// 피보나치 + useMemo
type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}
const myNum: number = 37

function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  useEffect(() => {
    console.log("mounting")
    console.log("Users: ", users)

    return () => console.log("unmounting")
  }, [users])


  const addOne = useCallback((e:MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>):void => setCount(prev => prev + 1), [])

  const result = useMemo(() => fib(myNum), [myNum])
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addOne}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default App
