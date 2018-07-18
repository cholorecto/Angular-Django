import { AppComponent } from './app.component';

import { SalesComponent } from './sales/sales.component';

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

export const APP_STATES = [
  appState,
  salesStates,
];