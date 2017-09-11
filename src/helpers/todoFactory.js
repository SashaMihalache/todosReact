import generateGUID from './guid';

export default function TodoFactor(todo) {
    return {
        id: generateGUID(),
        text: todo,
        isChecked: false
    }
}