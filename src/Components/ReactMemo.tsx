import React, {useState} from 'react';


const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('render Users')
    return <div> {
        props.users.map((u, i) => <div key={i}>{u}</div>
        )
    }
    </div>
}
const Users = React.memo(UsersSecret)

const ReactMemo = () => {
    let [count, setCount] = useState(0)
    let [users, setUsers] = useState(['ilya', 'Alena', 'Dimych', "Katya"])

    const onClickHandler = () => {
        setCount(count+1)
    }

    const addUser = () => {
       let newUsers = [...users, 'Ilya' + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <div>
            <button onClick={onClickHandler}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessageCounter count={count}/>
            <Users users={users}/>
        </div>
    );
};

export default ReactMemo;