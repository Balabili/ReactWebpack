import dva from 'dva';
import createHistory from 'history/createHashHistory';
import createLoading from 'dva-loading';
import router from './router';

const app = dva({ history: createHistory() });

app.use(createLoading());

app.model(require('./global').default);

app.router(router);

app.start('#root');
