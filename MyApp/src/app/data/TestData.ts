// тест

import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Робота'},
    {id: 2, title: 'Родина'},
    {id: 3, title: 'Навчання'},
    {id: 4, title: 'Відпочинок'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Їжа'},
    {id: 7, title: 'Фінанси'},
    {id: 8, title: 'Гаджети'},
    {id: 9, title: 'Здоров`я'},
    {id: 10, title: 'Автомобіль'},
    {id: 11, title: 'Ремонт'},
  ];


  static priorities: Priority[] = [
    {id: 1, title: 'Низький', color: '#e5e5e5'},
    {id: 2, title: 'Середній', color: '#85D1B2'},
    {id: 3, title: 'Високий', color: '#F1828D'},
    {id: 4, title: 'Дуже срочно!', color: '#F1128D'},
  ];


  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залити повний бак бензину',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2020-06.10')
    },

    {
      id: 2,
      title: 'Передати перелік справ начальнику управління',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2020-06.11')
    },

    {
      id: 3,
      title: 'Прибратись в себе в кімнаті, помити вікна',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1]
    },

    {
      id: 4,
      title: 'Сходити з сім`єю в парк, запросити друзів',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2020-06.14')
    },

    {
      id: 5,
      title: 'Перечитати книжку про психологію людей',
      completed: false,
      category: TestData.categories[2]
    },

    {
      id: 6,
      title: 'Сходити на бізнес урок',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2020-05.19')
    },

    {
      id: 7,
      title: 'Знайти білети до Єгипту та вибрати готель',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3]
    },

    {
      id: 8,
      title: 'Приготувати вечерю ждя сім`ї, (Паста Карбонара)',
      completed: false,
      category: TestData.categories[5]
    },

    {
      id: 9,
      title: 'Сходити на турнік',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2020-06.19')
    },

    {
      id: 10,
      title: 'Пробіжка зранку',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[4]
    },

    {
      id: 11,
      title: 'Барбекю на задньому дворі',
      completed: false
    },

    {
      id: 12,
      title: 'Відвідати лекцію на тему "Як стати успішним підприємцем"',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2],
      date: new Date('2020-07.22')
    },

    {
      id: 13,
      title: 'Закупка продуктів',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2020-06.13')
    },

    {
      id: 14,
      title: 'Провести співбесіди з новими HR-ами',
      completed: true,
      category: TestData.categories[0]
    },

    {
      id: 15,
      title: 'Здати еказмен з англійської мови',
      priority: TestData.priorities[2],
      completed: true
    },

    {
      id: 16,
      title: 'Покласти гроші в банк',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6]
    },

    {
      id: 17,
      title: 'Поговорити про підняття зарплати',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[6]
    },

    {
      id: 18,
      title: 'Повний аналіз крові',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2020-07.02')
    },

    {
      id: 19,
      title: 'Дискусія про новий айпад і самсунг',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2020-06.29')
    },

    {
      id: 20,
      title: 'Сходити на футбол',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2020-06.27')
    },
  ];
}
