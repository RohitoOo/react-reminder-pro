import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

const reminder = (action) => ({
    text: action.text,
    id: Math.random(),
    done: false,
    dueDate: action.dueDate
});

const removeByID = (state = [], id) => {
    const reminders = state.filter(r => r.id !== id);
    return reminders;
};

const Reminders = (state = [], action) => {
    let reminders = null;
    const currentState = JSON.parse(localStorage.getItem('remindlist'));
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...currentState, reminder(action)];
            localStorage.setItem('remindlist', JSON.stringify(reminders));
            console.log('reminders as state', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeByID(currentState, action.id);
            localStorage.setItem('remindlist', JSON.stringify(reminders));
            return reminders;
        default:
            return currentState;
    }
};

export default Reminders;
