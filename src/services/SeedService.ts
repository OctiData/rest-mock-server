import { IGeneralResponse } from '../types/api';
import { Timestamp } from 'firebase-admin/firestore';
import { FirestoreCollections } from '../types/firestore';
import usersData from '../data/initial-users.json';

export class SeedService {
  constructor(private readonly db: FirestoreCollections) {}

  async init(): Promise<IGeneralResponse> {
    const batch = this.db.firestore.batch();

    for (const user of usersData) {
      const docRef = this.db.users.doc(user.id);
      batch.set(docRef, {
        ...user,
        isInitial: true,
        role: user.role as 'admin' | 'customer',
        uiTheme: user.uiTheme as 'dark' | 'light',
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
    }

    await batch.commit();

    return {
      status: 'success',
      message: 'Initial data has been successfully seeded.'
    };
  }
}
