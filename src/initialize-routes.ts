import * as controllers from './controllers';
import * as routes from './routes';
import * as services from './services';

import { FirestoreCollections } from './types/firestore';

export function initializeRoutes(db: FirestoreCollections) {
  const seedService = new services.SeedService(db);
  const seedController = new controllers.SeedController(seedService);
  const seedRoute = new routes.SeedRoute(seedController);

  return {
    seedRoute
  };
}
