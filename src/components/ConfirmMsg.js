import React, {useEffect} from 'react'
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from '../utilities/databaseManager';
export default function ConfirmMsg() {
    useEffect(() => {
        processOrder(); 
    }, 0)
    return (
        <div>
            <h3 className="text-center text-danger my-5">Your order has been confirmed</h3>
        </div>
    )
}
