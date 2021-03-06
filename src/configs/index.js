export const APP_BASE_URL = process.env.APP_BASE_URL || 'http://89.223.124.52'

export const APP_MENU_LIST = [
  {
    icon: 'inbox',
    label: 'Товары',
    uri: 'products',
    separator: true
  },
  {
    icon: 'send',
    label: 'Услуги',
    uri: 'services',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Статьи',
    uri: 'articles',
    separator: false
  },
  {
    icon: 'error',
    label: 'Доставка',
    uri: 'delivery',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Вопрос-ответ',
    uri: 'faqs',
    separator: false
  }
]
