import { IdType, TextType, TaskEntity } from '../entities/task.entity';
 
const create = (id: IdType, text: TextType): TaskEntity => { 
    return {
        id,
        text,
        completed: false,
    };
}

const complete = (task: TaskEntity): TaskEntity => {
    return {
        ...task,
        completed: true,
    };
}

const uncomplete = (task: TaskEntity): TaskEntity => {
    return {
        ...task,
        completed: false,
    };
}


export { create, complete, uncomplete };