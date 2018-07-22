import { AppComponent } from './app.component';

import { SalesComponent } from './sales/sales.component';
import { EditItemsComponent } from './edit-items/edit-items.component';

export const appState = {
  name: 'app',
  redirectTo: 'app.sales',
  component: AppComponent,
};


export const salesStates = {
  name: 'app.sales',
  url: '/sales',
  views: {
    // 'header@app': {
    //   component: SalesComponent
    // },
    'content@app': {
      component: SalesComponent
    }
  }
};

export const editItemState = {
  name: 'app.edit-items',
  url: '/item/{id}',
  views: {
    'content@app': {
      component: EditItemsComponent
    }
  }
};

export const APP_STATES = [
  appState,
  salesStates,
  editItemState,
];