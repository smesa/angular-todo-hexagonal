
export type IdType = string;
export type TextType = string;
export type DoneType = boolean;

export interface TaskEntity { 
    id: IdType;
    text: TextType;
    completed: DoneType;
}
