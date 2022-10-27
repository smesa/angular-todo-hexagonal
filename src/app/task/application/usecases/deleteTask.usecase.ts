import { TaskEntity, TaskRepository } from "../../domain";

type DeleteTaskRepository = Pick<TaskRepository, 'delete'>;

const deleteTaskUseCase = (task: TaskEntity, taskRepository: DeleteTaskRepository) => {
    taskRepository.delete(task)
}

export { deleteTaskUseCase };