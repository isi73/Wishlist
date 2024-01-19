import React from 'react';

const wishes = [
    {
        id: 0,
        text: "Travel to the moon",
        completed: false
    },
    {
        id: 1,
        text: "Matar al vecino",
        completed: false
    },
    {
        id: 2,
        text: "Morirme",
        completed: false
    }
]

export default function app() {
    return (
        <div>
            <h1>My wishlist</h1>
            <fieldset>
                <legend>New wish: </legend>
                <input
                    type="text"
                    placeholder="" />
            </fieldset>
            <ul>
                {wishes.map((wish) => (
                    <li key={wish.id}>
                        <input type="checkbox" checked={wish.completed} id={wish.id} />
                        <label htmlFor="{wish.id}">{wish.text}</label>
                    </li>
                ))}
            </ul>
        </div>
    )
}
