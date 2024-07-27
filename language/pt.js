const translations = {
    
  afktemx: 'Чувак, ты хочешь оставить целое завещание или как?',
  afkdone: 'Набор AFK',
  afkdel: 'С возвращением',
  afktime: 'Отсутствовал с тех пор, как',
  with: 'Причина',
  afkmsg: 'Я сообщу об этом любому, кто упомянет о вас',
  afktag: 'Пользователь - АФК',
  name: 'Имя',
  noMention: 'Упомянуть пользователя',
  userDb: 'Этого пользователя нет в моей базе данных',
  example: 'Пример',

  //-- Stick reaction
  killmsg: 'Убитый',
  kismsg: 'Поцеловал в',
  patmsg: 'Похлопывать',
  slapmsg: 'Шлепнул',

  next: 'Следующий',
  hi: 'Здравствуйте',
  gp: 'Группа',
  nobbot: 'Эта команда может быть использована только в основном боте',
  botqr: '*Используйте этот код, чтобы стать ботом*1. Нажмите на три точки в правом верхнем углу.2. Коснитесь связанных устройств.3. Выберите *Ссылку с номером телефона*Примечание:* Код действителен только для этого номера.',
  recon: 'Соединение потеряно...',
  sesClose: 'Соединение было закрыто, вам необходимо подключиться вручную, отправив *ID*',
  connet: 'Успешно подключен',
  connID: '*Подключение выполнено успешно!*\п\п Через несколько секунд мы вышлем вам *идентификатор*, который вы должны использовать для повторного подключения\n\n*ПРИМЕЧАНИЕ:* Покиньте группу *DyLux ┃ ᴮᴼᵀ',
  connMsg: 'При следующем подключении отправьте следующее сообщение, чтобы войти в систему без сканирования другого QR-кода',
  botlist: 'Список активных субботов',
  newcode: (usedPrefix) => `- отлично! Теперь вы можете использовать *${usedPrefix}botclone* для запроса нового QR-кода`,
  nsbot: 'Эта команда предназначена только для *Активных субботов*',
  msgcode: 'Новый код был отправлен в ваш личный чат',
  stopbot: 'Бот отключен',

  total: 'Весь',
  tx: 'Коробка передач',
  txdone: 'Отправлено сообщение',
  cmdlist: '*СПИСОК КОМАНД*\n\n▢ *Информация:* Если он выделен *жирным шрифтом*, он заблокирован',
  notext: 'Повторите, добавив текст',
  textSe: 'Разделите текст символом',
  reply: 'Ответить на сообщение',
  replyImg: 'Ответ на изображение',
  cmdSave: 'Команда сохранена',

  oversizePrem: 'Размер файла превышает допустимый для загрузки лимит',
  error: 'Произошла ошибка, пожалуйста, повторите попытку позже',
  size: 'Размер',
  link: 'Ссылка',
  dev: 'Разработчик',
  version: 'Версия',
  searchTo: (value, usedPrefix, command) => `Для поиска в ${value}:\n\n📌Use: *${usedPrefix + command} <текст>* Для загрузки с URL-адреса:\n*${usedPrefix + command}* <ссылка>`,
  search: (value) => `Введите то, что вы хотите найти в *${value}*`,
  lastUp: 'Последнее обновление',
  noLink: (value) => `Введите ${value} ссылка`,
  title: 'Заглавие',
  noUsername: 'Введите имя пользователя',
  username: 'Имя пользователя',
  followers: 'Последователи',
  follows: 'Следующий',
  bio: 'Био',
  posts: 'Сообщений',
  aploud: 'Закачанный',
  limitdl: 'Лимит загрузки файла превышен',
  limitdlTe: 'Обновите до премиум-версии, чтобы загружать файлы до',
  duration: 'Продолжительность',
  views: 'Просмотры',
  quality: 'Качество',
  type: 'Тип',
  desc: 'Описание',
  useCmd: 'Использование команд',
  noNum: 'Вводите только цифры',
  random: 'Случайный',

  purse: 'Кошелек',
  dmd: 'Бриллианты',
  money: 'Монеты',
  bank: 'Банк',
  itemV: 'Чтобы просмотреть все *Элементы*',
  isNan: 'Сумма должна быть действительной',
  voucher: 'Расписка',
  buy: 'Приобретенный',
  buyCount: 'Количество приобретенных товаров',
  spent: 'Потраченный',
  buyNan: (value) => `У тебя их недостаточно *${value}* покупать`,
  noItem: (usedPrefix) => `Этого предмета не существует:\n\n*${usedPrefix}делайте покупки*, чтобы увидеть доступные товары`,
  noTime: 'Недопустимый формат времени',
  second: 'Втор(ой\ые)',
  hour: 'Час(ы)',
  minute: 'Минут(а\ы)',
  day: 'Ден(ь\и)',

  robCd: 'В данный момент вы не можете совершить *преступление*. Вы должны подождать',
  crime: 'Вы успешно совершили преступление',
  crimeAl: 'Вы были не очень осторожны при попытке кражи и включили сигнализацию. Вы могли взять только',
  robMul: 'О, нет! Ваше преступление провалилось, и вы были оштрафованы',
  victin: 'Жертва',
  robDo: 'Ты украл',
  tag: 'Метка',
  dailyCd: 'Вы уже получили свое ежедневное вознаграждение. Заходите еще',
  daily: 'Ежедневная награда',
  amount: 'Сумма',
  dep: (value) => `Вы внесли депозит *${value}🪙* в банк`,
  depNan: 'У вас нет денег для внесения депозита',
  resBt: 'Сброс',
  lbTitle: 'Таблица лидеров',
  top: 'Верхний',
  lvl: 'Уровень',
  of: 'от',
  you: 'Вы',
  rank: 'Ранг',
  fxp: 'Опыт, необходимый для повышения уровня',
  lvlbfor: 'Предыдущий уровень',
  lvlup: 'Текущий уровень',
  mineCd: 'Вы можете вернуться в шахту через',
  mine: '- отлично! Вы добывали',
  restEcon: 'Экономика ботов была восстановлена',
  shop: 'Магазин',
  shopMsg: 'Вы можете купить с помощью',
  prem: 'Высший сорт',
  onTransfer: 'Вы осуществляете перевод',
  transItem: 'Предметы, подлежащие передаче',
  confirm: 'Вы уверены, что хотите перевестись',
  to: 'К',
  payNan: 'Недостаточно средств для перевода',
  payCd: 'Время вышло',
  cancelPay: 'Перевод отменен',
  pay: 'Передача',
  payError: 'Передача данных об ошибке',
  wd: 'Сколько *монет* вы пытаетесь вывести?',
  wdYes: 'Вы отстранились',
  noWd: 'Вы не можете снять со счета больше того, что у вас есть на счету в банке',
  weeklyCd: `Это называется еженедельная награда 😉. Заходите еще`,
  weekly: '*ЕЖЕНЕДЕЛЬНАЯ НАГРАДА*Нет! Неделя уже прошла? В любом случае, вот',
  workCd: 'Вы можете вернуться к работе в',

  nable: 'Включенный',
  disable: 'Нетрудоспособный',
  toBot: 'Для этого бота',
  toGp: 'Для этой группы',
  gaytex: 'Кто хочет надругаться над этим геем?',
  result: 'Результат',
  shipCd: 'Вы можете выбрать другого партнера в рамках',
  shipp: 'Пара за день',
  toaud: 'Ответьте на видео или голосовую заметку, которые вы хотите преобразовать в mp3, с помощью команды',
  toav: 'Ответьте на аудио, которое вы хотите преобразовать в голосовую заметку, с помощью',

  noGame: 'Не в игре',
  resGame: 'Сеанс *TicTacToe* был сброшен',
  gameOff: 'Игра закончилась',
  gaDone: 'Правильный ответ',
  win: 'Ты победил',
  mathOff: 'Больше никаких шансов',
  chance: 'Шансы',
  answer: 'Ответ',
  mathError: '*Неверный ответ*\n\n Есть еще',
  gameMode: 'Имеющиеся трудности',
  mathOn: 'В этой группе все еще есть вопросы, на которые нет ответов',
  time: 'Время',
  timeOff: 'Время вышло!\Ответ таков:',
  reward: 'Rэвард',
  pptCd: 'Чтобы начать играть снова, вы должны подождать',
  ppt: (usedPrefix, command) => `Выберите камень, ножницы, бумагу\n\n📌 Пример: *${usedPrefix + command}* paper`,
  coinNan: 'У вас недостаточно * монет*, чтобы играть',
  stone: 'рок',
  sciss: 'ножницы',
  paper: 'бумага',
  tie: 'Нарисуйте',
  win: 'Ты победил',
  lost: 'Ты проиграл',
  roulet: (usedPrefix) => `Yвы можете делать множественные ставки в рулетке.\п\П Использование: *${usedPrefix}рулетка* <сумма> <пробел>\n\Nприумножитель выплаты`,
  rouletCd: 'Вы уже сделали ставку. Пожалуйста подождите',
  moreInfo: 'Для получения дополнительной информации',
  betMin: 'Сумма ставки должна быть больше, чем',
  betMax: 'Сумма ставки превышает максимальный лимит в размере',
  betNan: 'У вас недостаточно *Монет*, чтобы сделать эту ставку',
  in: 'в',
  bet: 'Вы сделали ставку в размере',
  fell: 'Рулетка приземлилась на',
  slotC: 'У тебя почти получилось, продолжай пытаться :)',

  delWarnUser: 'Администратор уменьшил количество ваших предупреждений, теперь у вас есть',
  warnNan: 'У пользователя нет никаких предупреждений',
  delwarn: 'Не предупреждать',
  warns: 'Предупреждения',
  warn: 'Предупреждение',
  warnRec: 'Вы получили предупреждение от администратора',
  numError: 'Неверный номер',
  promote: 'Продвигаемый пользователь',
  demote: 'Пользователь понижен в должности',
  gpInfo: 'Информация о группе',
  members: 'Члены',
  gpOwner: 'Владелец группы',
  admin: 'Администратор',
  gpConf: 'Групповая конфигурация',
  gpConfMsg: 'Конфигурация сообщения',
  kick: 'Пользователь Пнул',
  linkGp: 'Ссылка на группу',
  preNan: 'Введите действительный префиксный номер',
  gpNanPre: 'В группе нет участников с префиксом',
  userPref: 'Пользователи с префиксом',
  profile: 'Профиль',
  number: 'Номер',
  age: 'Возраст',
  gender: 'Пол',
  lang: 'Идиома',
  regOn: 'Зарегистрированный',
  xpUp: 'Готовы к',
  upNan: 'Осталось повысить уровень',
  gpRulesNan: 'На данный момент в группе нет никаких правил',
  gpRules: 'Групповые правила',
  rulesMsgOn: 'Установлены групповые *Правила*',
  rulesMsg: 'Введите правила группы',
  welMsgOn: 'Установлено приветственное сообщение',
  leaMsgOn: 'Отправлено прощальное сообщение',
  welMsg: 'Введите приветственное сообщение\n\n@пользователь (упоминание)\n@группа (название группы)\n@описание (описание группы)',
  leaMsg: 'Введите прощальное сообщение\n\n@user (упоминание)',
  gpSetting: 'Настройки группы\n\Поткройте и закройте группу',
  user: 'Пользователь',
  userWarn: 'Пользователь предупрежден',
  wningUser: (war) => `Если вы получите *${war}* предупреждаю, вы будете автоматически удалены из группы`,
  warnMaxU: (war) => `Пользователь превысил *${war}* предупреждения и будут удалены`,
  blockNan: 'Нет заблокированных номеров',
  bckList: 'Заблокированный список',
  donate: '*ПОЖЕРТВОВАНИЕ* Вы можете сделать пожертвование, если хотите помочь боту оставаться активным',
  langList: 'Выберите язык, который вы хотите использовать\n\n≡ *Доступные языки*',
  expire: 'Истекает в',
  ping: 'Скорость',
  uptime: 'Рабочее время',
  gpNsfw: (usedPrefix) => `Группа не разрешает использовать содержимое NSFW в этой группе\n${bgp3}\n\nЕсли вы являетесь администратором, включите его с помощью\n*${usedPrefix}включить* nsfw`,
  nsfwAge: 'Вы несовершеннолетний! Приходите, когда вам исполнится 18 лет',
  addPremUser: 'Теперь вы являетесь премиум-пользователем',
  banChat: 'Бот был отключен в этой группе',
  unBanChat: 'Бот активен в этой группе',
  banUser: 'Вы больше не можете использовать мои команды',
  unBanUser: 'Вы были незащищены',
  restartBot: 'Перезапуск бота...Пожалуйста, подождите',

  genderList: 'Доступные полы',
  man: 'Самец',
  woman: 'Женский',
  other: 'Другой',
  regIsOn: 'Вы уже зарегистрированы, хотите ли вы зарегистрироваться еще раз? 📌 Используйте эту команду, чтобы удалить свою регистрацию',
  nameMax: 'Это слишком длинное название',
  oldReg: 'Ого, дедушка хочет поиграть с ботом',
  numSn: 'серийный номер',
  snVerify: 'Подтвердите свой серийный номер с помощью команды',
  snError: 'Неверный серийный номер',
  unReg: 'Регистрация удалена',
  stickError: 'Cпри сбое версии попробуйте отправить *image/video/gif* сначала, а затем ответьте командой',
  tgStick: 'просматривайте ссылки на пакеты стикеров в telegram',
  replyStick: 'Ответить на наклейку',
  ssWeb: 'Введите URL-адрес веб-страницы',
  tradList: 'Список поддерживаемых языков',
  searchError: 'Никаких результатов найдено не было',

  rownerH: 'Эта команда может быть использована только создателем *Бота*',
  ownerH: 'Эта команда может быть использована только владельцем * и вспомогательными ботами*',
  modsH: 'Эта функция предназначена только для *Бот-модераторов*',
  premH: 'Эта команда предназначена только для *Премиум-пользователей *\n\n Введите */премиум* для получения дополнительной информации',
  groupH: 'Эта команда может использоваться только в группах',
  privateH: 'Эта команда может быть использована только в приватном чате *Бота*',
  adminH: 'Эта команда предназначена только для *Администраторов групп*',
  botAdmin: 'Чтобы использовать эту команду, я должен быть администратором **!',
  unregH: 'Зарегистрируйтесь, чтобы воспользоваться этой функцией, набрав:\n\n*/reg*',
  ig: `▢ Подписывайтесь на меня`
}

export default translations

