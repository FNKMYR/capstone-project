const sampleData = [
  {
    title: 'Chinese food',
    description: 'Chinatown restaurant',
    amount: 20.0,
    date: '2022-03-06',
    paidfor: ['Jens ', 'Max ', 'Alex'],
    paidby: 'Jens',
  },
  {
    title: 'Taxi',
    description: 'Ride from hotel to club',
    amount: 15.74,
    date: '2022-03-06',
    paidfor: ['Jens ', 'Max ', 'Alex'],
    paidby: 'Jens',
  },
  {
    title: 'esse magna dolore',
    description: 'sit commodo nisi in dolor anim magna non officia qui',
    amount: 79.58,
    date: ' 2022-03-06',
    paidfor: ['Jens ', 'Max ', 'Alex'],
    paidby: 'Jens',
  },
  {
    title: 'mollit sit esse',
    description: 'non magna sunt eu ea cupidatat ex non anim esse',
    amount: 71.52,
    date: ' 2022-03-08',
    paidfor: ['Jens ', 'Max ', 'Alex'],
    paidby: 'Jens',
  },
  {
    title: 'exercitation proident exercitation',
    description:
      'fugiat anim eiusmod sunt enim elit consectetur ullamco ea velit',
    amount: 47.31,
    date: ' 2022-03-09',
  },
  {
    title: 'aute fugiat do',
    description:
      'qui sunt aute sit commodo ipsum exercitation ullamco mollit incididunt',
    amount: 28.79,
    date: ' 2022-03-04',
  },
  {
    title: 'adipisicing nisi ad',
    description: 'elit non culpa dolor tempor consequat amet ut nisi ullamco',
    amount: 31.95,
    date: ' 2022-03-11',
  },
  {
    title: 'veniam et culpa',
    description:
      'reprehenderit pariatur ut quis esse laboris elit nostrud enim ullamco',
    amount: 68.04,
    date: ' 2022-03-11',
  },
  {
    title: 'exercitation commodo cillum',
    description:
      'tempor aute id aliquip irure reprehenderit pariatur sunt commodo culpa',
    amount: 75.23,
    date: ' 2022-03-10',
  },
  {
    title: 'consectetur adipisicing ea',
    description: 'sint sit minim est culpa officia elit consequat mollit aute',
    amount: 55.03,
    date: ' 2022-03-08',
  },
  {
    title: 'nisi commodo sunt',
    description:
      'velit in enim magna non consequat pariatur cupidatat ea ullamco',
    amount: 73.24,
    date: ' 2022-03-10',
  },
  {
    title: 'aliqua enim fugiat',
    description: 'ex amet magna magna velit eu sunt dolor aliqua nostrud',
    amount: 28.59,
    date: ' 2022-03-02',
  },
  {
    title: 'aliquip proident eu',
    description: 'magna irure mollit fugiat anim minim anim est est sint',
    amount: 26.51,
    date: ' 2022-03-07',
  },
  {
    title: 'eiusmod occaecat excepteur',
    description:
      'exercitation Lorem labore in irure minim commodo aliquip dolore ipsum',
    amount: 79.09,
    date: ' 2022-03-10',
  },
  {
    title: 'commodo eu duis',
    description: 'ea aliqua deserunt veniam elit minim duis fugiat ut nulla',
    amount: 36.08,
    date: ' 2022-03-03',
  },
  {
    title: 'nulla qui ullamco',
    description: 'et ea sint et reprehenderit ea magna magna ut sit',
    amount: 72.97,
    date: ' 2022-03-03',
  },
  {
    title: 'nostrud non incididunt',
    description: 'sunt commodo nisi sit id nisi pariatur est minim fugiat',
    amount: 40.55,
    date: ' 2022-03-11',
  },
  {
    title: 'ipsum in dolore',
    description: 'qui sint id ea fugiat cillum ad anim qui id',
    amount: 22.34,
    date: ' 2022-03-09',
  },
  {
    title: 'incididunt ullamco exercitation',
    description: 'cupidatat enim et laborum qui labore fugiat eu ipsum aliqua',
    amount: 20.9,
    date: ' 2022-03-08',
  },
  {
    title: 'anim reprehenderit consectetur',
    description:
      'amet ullamco amet magna commodo tempor aliqua nisi fugiat duis',
    amount: 72.05,
    date: ' 2022-03-09',
  },
  {
    title: 'nisi ipsum mollit',
    description:
      'amet dolor exercitation adipisicing nostrud incididunt adipisicing do nisi sint',
    amount: 31.61,
    date: ' 2022-03-08',
  },
  {
    title: 'laborum aute ipsum',
    description:
      'aute irure irure deserunt pariatur sit laborum officia adipisicing ullamco',
    amount: 75.17,
    date: ' 2022-03-06',
  },
  {
    title: 'in cillum officia',
    description: 'magna cupidatat ut commodo sint nulla nulla ex qui laborum',
    amount: 66.8,
    date: ' 2022-03-05',
  },
  {
    title: 'eu ad consectetur',
    description:
      'cillum et nostrud mollit excepteur et nisi laboris deserunt eu',
    amount: 52.25,
    date: ' 2022-03-10',
  },
  {
    title: 'veniam Lorem commodo',
    description:
      'mollit mollit non fugiat commodo adipisicing non adipisicing adipisicing officia',
    amount: 51.2,
    date: ' 2022-03-01',
  },
  {
    title: 'Lorem culpa laboris',
    description:
      'consequat sit incididunt eu sit do laborum dolor excepteur ad',
    amount: 28.29,
    date: ' 2022-03-03',
  },
  {
    title: 'commodo mollit magna',
    description:
      'voluptate ullamco ipsum aute velit incididunt ad aliquip proident ipsum',
    amount: 61.53,
    date: ' 2022-03-01',
  },
  {
    title: 'nisi nulla mollit',
    description:
      'in incididunt officia consectetur cupidatat sit sit ea adipisicing duis',
    amount: 58.92,
    date: ' 2022-03-11',
  },
  {
    title: 'aliqua reprehenderit quis',
    description:
      'excepteur ex aliqua laborum deserunt deserunt laborum qui non Lorem',
    amount: 52.79,
    date: ' 2022-03-09',
  },
  {
    title: 'exercitation officia voluptate',
    description:
      'ut exercitation et elit mollit aliqua pariatur sunt culpa officia',
    amount: 65.22,
    date: ' 2022-03-07',
  },
  {
    title: 'ea voluptate pariatur',
    description:
      'exercitation fugiat elit ea adipisicing sit sint irure elit quis',
    amount: 73.97,
    date: ' 2022-03-06',
  },
  {
    title: 'adipisicing non ad',
    description: 'aliqua esse ullamco non commodo dolore in anim ipsum aliqua',
    amount: 46.55,
    date: ' 2022-03-05',
  },
];

export default sampleData;
