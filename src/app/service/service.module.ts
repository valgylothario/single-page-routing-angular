import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DataSourceService } from './DataSourceService';

const routes: Routes = [
  {
    path: '**',
    component: ServiceComponent,
  },
];

@NgModule({
  declarations: [ServiceComponent, TableComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DataSourceService],
})
export class ServiceModule {}
