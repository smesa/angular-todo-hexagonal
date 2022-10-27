import { TaskEntity } from "../../domain";
import { TaskRepository } from "../../domain/repositories";

type UpdateTaskRepository = Pick<TaskRepository, 'update'>

const updateTaskUseCase = (task: TaskEntity, taskRepository: UpdateTaskRepository) => {
    taskRepository.update(task)
}

export { updateTaskUseCase };