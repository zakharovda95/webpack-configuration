export interface ITaskFormData {
  important: boolean;
  title: string;
  text: string;
}
export interface ITaskData extends ITaskFormData {
  id: number;
  date: string;
}
