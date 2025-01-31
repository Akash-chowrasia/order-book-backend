import './modules/db';
import { finishApp, getAnApp } from './app';
import authModule from './modules/auth';
import productModule from './modules/products';

const PORT = 8001;

const app = getAnApp();

authModule.init(app);

productModule.init(app);

finishApp(app);

(async () => {
  try {
    await app.listen(PORT);
    console.log('-------   Server Started  ------');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
})();
