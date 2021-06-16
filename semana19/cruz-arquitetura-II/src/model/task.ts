export enum TASK_STATUS {
   TO_DO = 'TO_DO',
   DOING = 'DOING',
   DONE = "DONE"
}

export type taskData = {
   title: string,
   description: string,
   deadline: string,
   status: TASK_STATUS,
   authorId: string
}

export type task = taskData & { id: string }
