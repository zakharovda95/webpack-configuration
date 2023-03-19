import { ITaskData } from '../interfaces/task-data.interface';
import { getLocaleDateNow } from '../lib/get-locale-date-now.method';

export const mockDataConstants: ITaskData[] = [
  {
    id: 1,
    important: true,
    title: 'Какая то важная задача',
    text: 'Сходить поспать, поесть, погулять, снова поспать, погладить морских свинок',
    date: '13.03.2023',
  },
  {
    id: 2,
    important: false,
    title: 'Какая то не очень важная задача',
    text: 'Работать в поте лица весь день',
    date: '18.03.2023',
  },
];
