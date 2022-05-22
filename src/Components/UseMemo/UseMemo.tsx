import React, {useMemo, useState} from 'react';

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('render Users')
    return <div> {
        props.users.map((u, i) => <div key={i}>{u}</div>
        )
    }
    </div>
}
const Users = React.memo(UsersSecret)

export const UseMemo= () => {
    console.log('Helps to ReactMemo')
    let [count, setCount] = useState(0)
    let [users, setUsers] = useState(['ilya', 'Alena', 'Dimych', 'Katya'])

    const onClickHandler = () => {
        setCount(count + 1)
    }

    const addUser = () => {
        let newUsers = [...users, 'Ilya' + new Date().getTime()]
        setUsers(newUsers)
    }
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])


    return (
        <div>
            <button onClick={onClickHandler}>+</button>
            <button onClick={addUser}>add user</button>
            {count}
            <Users users={newArray}/>
        </div>
    );
};


export default UseMemo;