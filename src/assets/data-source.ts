export interface IDataSource {
  name: string;
  key: string;
  routerUrl: string;
  children: IDataSource[];
}

export const DataSource: IDataSource[] = [
  {
    name: 'Cards',
    key: 'Cards',
    routerUrl: '/service/Cards',
    children: [
      {
        name: 'Manage Cards',
        key: 'ManageCards',
        children: [],
        routerUrl: '/service/Cards/ManageCards',
      },
      {
        name: 'New Cards',
        key: 'NewCards',
        children: [],
        routerUrl: '/service/Cards/NewCards',
      },
      {
        name: 'Pay Cards',
        key: 'PayCards',
        children: [],
        routerUrl: '/service/Cards/PayCards',
      },
      {
        name: 'WithDrows',
        key: 'WithDrows',
        children: [],
        routerUrl: '/service/Cards/WithDrows',
      },
    ],
  },
  {
    name: 'Credit',
    key: 'Credit',
    routerUrl: '/service/Credit',
    children: [
      {
        name: 'Hire Credit',
        key: 'HireCredit',
        children: [],
        routerUrl: '/service/Credit/HireCredit',
      },
      {
        name: 'Consult Credit',
        key: 'ConsultCredit',
        children: [],
        routerUrl: '/service/Credit/ConsultCredit',
      },
    ],
  },
  {
    name: 'OtherService',
    key: 'OtherService',
    routerUrl: '/service/OtherService',
    children: [
      {
        name: 'Direct Debt',
        key: 'DirectDebt',
        children: [],
        routerUrl: '/service/OtherService/DirectDebt',
      },
      {
        name: 'Manage Account',
        key: 'ManageAccount',
        children: [],
        routerUrl: '/service/OtherService/ManageAccount',
      },
    ],
  },
];
