import { TaskEntity } from "../entities";

interface TaskRepository {

    // state
    tasks: TaskEntity[] | null;
    isLoading: boolean;
    
    // actions
    create(task: TaskEntity): Promise<TaskEntity>; // Create
    get(): Promise<TaskEntity[]>; // Read
    update(task: TaskEntity): Promise<TaskEntity>; // Update
    delete(task: TaskEntity): Promise<void>; // Delete

}

export type { TaskRepository };
