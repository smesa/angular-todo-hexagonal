import { TaskEntity, TaskRepository } from "../../domain";

type CreateTaskRepository = Pick<TaskRepository, 'create'>; 

const createTaskUseCase = (task: TaskEntity, taskRepository: CreateTaskRepository) => {
    taskRepository.create(task)
}

export { createTaskUseCase };
