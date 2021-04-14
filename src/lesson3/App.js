import TsDemo from "./6Ts.tsx"
import Todo from "./todo/App"


let App = <h1>Test</h1>


let data = [
    { id: 0, text: '天气不错哦!!!', complete: false },
    { id: 1, text: '天气不错哦!!!', complete: false },
    { id: 2, text: '出去玩啊!!!', complete: true },
]
App = <Todo data={data} />

export default App