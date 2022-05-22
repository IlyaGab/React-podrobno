import React, {KeyboardEvent, useEffect, useState} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' ) {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const nextPretendent = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i-1]
                    if (nextPretendent) {
                        props.onChange(nextPretendent.value)
                        return;
                    }
                }
            }
            if (!selectedItem){
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape' ){
            setActive(false)
        }
    }

    const onClickHandlerTitle = () => {
        setActive(!active)
    }
    const onItemClick = (value: string) => {
        props.onChange(value)
        onClickHandlerTitle()
    }


    return (
        <>
            <div className={s.select}
                 tabIndex={0}
                 onKeyUp={onKeyUp}>
                <span className={s.main}

                      onClick={onClickHandlerTitle}>{selectedItem && selectedItem.title}
                </span>
                {active &&
                    <div className={s.items}>
                        {props.items.map((i => <div key={i.value}

                                                    onMouseEnter={() => {
                                                        setHoveredElementValue(i.value)
                                                    }}
                                                    className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                                                    onClick={() => onItemClick(i.value)}>
                            {i.title}
                        </div>))}
                    </div>
                }
            </div>
        </>
    );
};

export default Select;