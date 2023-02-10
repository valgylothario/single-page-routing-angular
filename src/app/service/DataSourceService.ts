import { DataSource, IDataSource } from '../../assets/data-source';

export class DataSourceService {
  dataSource = DataSource;
  result: IDataSource[] = [];

  getDataByKey(keys: string[]) {
    this.result = [];
    keys.forEach((key: string) => {
      this.result = this.findData(key);
    });
    return this.result;
  }

  findData(key: string) {
    if (this.result.length === 0) {
      return this.dataSource;
    } else {
      return this.result.filter((r) => r.key === key)[0].children;
    }
  }
}
