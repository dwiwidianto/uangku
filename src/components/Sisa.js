import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext';

const Sisa = () => {
    const { expenses, income } = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost)
    }, 0)
    
    return (
        <>
            <div className='alert alert-warning'>
                <span> Sisa Tabungan: Rp. {income - totalExpenses}</span>

            </div>
        </>
    );
};

export default Sisa
