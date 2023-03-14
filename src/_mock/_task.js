import { add } from 'date-fns';
import _mock from './_mock';
import { randomInArray, randomNumberRange } from './funcs';

// ----------------------------------------------------------------------

export const _tasks = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  taskNumber: `tk-${17048 + index}`,
  title: randomInArray(['Article Task', 'Health Task', 'Education Task', 'IT Task', 'Dev Task']),
  category: randomInArray(['Research', 'Health', 'Education', 'IT', 'Development']),
  priority: randomInArray(['High', 'Medium', 'Low']),
  description: randomInArray(['Description 1', 'Description 2', 'Description 3']),
  attachment: randomInArray(['task.pdf', 'requirements.png', 'requireTask.docx']),
  timer: randomInArray(['03:03:33', '04:33:02', '39:01:01']),
  name: _mock.name.taskName(index + 1),
  hour: randomNumberRange(1, 10),
  taxes: 5,
  discount: 10,
  sent: randomNumberRange(1, 10),
  subTotalPrice: _mock.number.price(index + 1),
  totalPrice: _mock.number.price(index + 1),
  createDate: add(new Date(), { days: index, hours: index }),
  dueDate: add(new Date(), { days: index + 15, hours: index }),
  status: randomInArray(['active', 'pending', 'completed', 'cancelled']),
  service: randomInArray(['Research', 'Health', 'Education', 'IT', 'Development']),
  taskFrom: {
    id: _mock.id(index),
    name: _mock.name.fullName(index),
    address: _mock.address.fullAddress(index),
    company: _mock.company(index),
    email: _mock.email(index),
    phone: _mock.phoneNumber(index),
  },
  taskTo: {
    id: _mock.id(index + 1),
    name: _mock.name.fullName(index + 1),
    task: _mock.name.taskName(index + 1),
    address: _mock.address.fullAddress(index + 1),
    company: _mock.company(index + 1),
    email: _mock.email(index + 1),
    phone: _mock.phoneNumber(index + 1),
  },
  items: [...Array(3)].map((_, index) => ({
    id: _mock.id(index),
    title: _mock.text.title(index),
    description: _mock.text.description(index),
    quantity: 5,
    price: _mock.number.price(index),
    total: _mock.number.price(index),
    service: randomInArray(['all', 'research', 'health', 'education', 'iT', 'development']),
  })),
}));

export const _taskAddressFrom = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  address: _mock.address.fullAddress(index),
  company: _mock.company(index),
  email: _mock.email(index),
  phone: _mock.phoneNumber(index),
}));

export const _taskAddressTo = [...Array(16)].map((_, index) => ({
  id: _mock.id(index + 1),
  name: _mock.name.fullName(index + 1),
  address: _mock.address.fullAddress(index + 1),
  company: _mock.company(index + 1),
  email: _mock.email(index + 1),
  phone: _mock.phoneNumber(index + 1),
}));
