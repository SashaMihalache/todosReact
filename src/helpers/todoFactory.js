import generateGUID from './guid';

export const TodoCreator = (todo) => (
    {
        id: generateGUID(),
        text: todo,
        isChecked: false
    }
);

export const mockData = () => (
    [
        {id: 1, text: "Learn React", isChecked: true },
        {id: 2, text: "Learn React-Native", isChecked: false },
        {id: 3, text: "Learn Redux", isChecked: false }
    ]
);