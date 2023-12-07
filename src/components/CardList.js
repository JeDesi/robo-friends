import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // Создаем множество карточек юзеров-роботов, с использованием метода массива map()
    // Обращаемся к массиву.map() и возвращаем КОМПОНЕНТ CARD, на каждой итерации, при рендеринге DOM
    // На каждой итерации, в properties передаем i - индекс кажого элемента из массива

    const cardArray = robots.map((element, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
 
    return (
        <div>
            {cardArray}
        </div>
    )
}


export default CardList;