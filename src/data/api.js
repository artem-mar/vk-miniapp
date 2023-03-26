const events = [
  {
    id: 1,
    date: 1665475200000,
    text: 'event 0'
  },
  {
    id: 2,
    date: 1670746800000,
    text: 'событие 1'
  },
  {
    id: 3,
    date: 1670750400000,
    text: 'событие 2'
  },
  {
    id: 4,
    date: 1670751900000,
    text: 'событие 3'
  },
  {
    id: 5,
    date: 1671782400000,
    text: 'событие 4'
  },
  {
    id: 6,
    date: 1673956800000,
    text: 'событие 5'
  },
  {
    id: 7,
    date: 1673956800000,
    text: 'событие 5'
  }
]

const winners = [
  {
    id: 1,
    name: 'Сергей',
    email: 'sergey@mail.ru',
    phone: '+79994561212',
    date: 1677837600000,
    prize: 'Аааааавтомообиииииль!!!'
  },
  {
    id: 2,
    name: 'Виталий',
    email: 'supervitalya@mail.ru',
    phone: '+79005552211',
    date: 1677838200000,
    prize: 'Стиральная машина'
  },
  {
    id: 3,
    name: 'Николай',
    email: 'nikolay123@mail.ru',
    phone: '+79009997700',
    date: 1677838200000,
    prize: 'Утюг'
  },
  {
    id: 4,
    name: 'Семён',
    email: 'semen@mail.ru',
    phone: '+7953770011',
    date: 1677840000000,
    prize: 'Пивная кружка'
  },
  {
    id: 5,
    name: 'Андрей',
    email: 'andreypetrovich@mail.ru',
    phone: '+79875431122',
    date: 1677840300000,
    prize: 'Банановый стикер'
  },
  {
    id: 6,
    name: 'Антон',
    email: 'antonpelmeshkin@mail.ru',
    phone: '+79001112233',
    date: 1677840600000,
    prize: 'Ничего'
  }
]

export const getEvents = () =>
  new Promise((resolve) => {
    resolve(events)
  })
export const getWinners = () =>
  new Promise((resolve) => {
    console.log('aasda')
    resolve(winners)
  })

export default events
