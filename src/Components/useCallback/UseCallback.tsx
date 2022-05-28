import React, {useCallback, useState} from 'react';

export const UseCallback= () => {
    console.log('UseCalback')
    let [count, setCount] = useState(0)
    let [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const onClickHandler = () => {
        setCount(count + 1)
    }
    
    // const memoizedAddBook = useMemo(()=>{
    //     return  () => {
    //         let newUsers = [...books, 'Angular' + new Date().getTime()]
    //         setBooks(newUsers)
    //     }
    // }, [books]);
    
    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        let newUsers = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUsers)
    }, [books]);



    return (
        <div>
            <button onClick={onClickHandler}>+</button>
            {count}
            <Books addBook={memoizedAddBook2}/>
        </div>
    );
};

const BooksSecret = (props: { addBook:()=>void }) => {
    console.log('BookSecret')
    return <div>
        <button onClick={()=> props.addBook()}>add Book</button>
    </div>
}

const Books = React.memo(BooksSecret)

export default UseCallback;