import { TaskRepository } from "../../domain";

type GetTaskRepository = Pick<TaskRepository, 'get'>;

const getTaskUseCase = (taskRepository: GetTaskRepository) => { 
    taskRepository.get()
}

export { getTaskUseCase };