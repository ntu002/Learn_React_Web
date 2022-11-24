import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
//import Card from './Card';
import Card from '../UI/Card';
const ExpenseItem = (props) => {
//function ExpenseItem(props) {

    const clickHander = () => {
        console.log('Click!!!!!');
    }
    return (
        <Card className = 'expense-item'>
            <ExpenseDate date = {props.date} />
            <div className = 'expense-item__description'>
                <h2>{props.title}</h2>
                <div className = 'expense-item__price'> ${props.amount} </div>
            </div>
            <button onClick = {clickHander}>Change click</button>
        </Card>
    );
}

export default ExpenseItem;