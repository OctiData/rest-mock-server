import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FirestoreDataConverter } from 'firebase-admin/firestore';
import AppConfig from './../config/app-config';
import { FirestoreCollections } from '../types/firestore';
import { User } from '../types/entities/User';

initializeApp({
  credential: cert({
    projectId: AppConfig.db.firestore.projectId,
    clientEmail: AppConfig.db.firestore.clientEmail,
    privateKey: AppConfig.db.firestore.privateKey
  })
});

const firestore = getFirestore(AppConfig.db.firestore.databaseId as string);

// Helper for nested updates
type PathImpl<T, K extends keyof T> =
  K extends string
    ? T[K] extends Record<string, any>
      ? T[K] extends ArrayLike<any>
        ? K | `${K}.${PathImpl<T[K], Exclude<keyof T[K], keyof any[]>>}`
        : K | `${K}.${PathImpl<T[K], keyof T[K]>}`
      : K
    : never;

type Path<T> = PathImpl<T, keyof T> | keyof T;

type PathValue<T, P extends Path<T>> =
  P extends `${infer K}.${infer Rest}`
    ? K extends keyof T
      ? Rest extends Path<T[K]>
        ? PathValue<T[K], Rest>
        : never
      : never
    : P extends keyof T
      ? T[P]
      : never;

export type UpdateData<T extends object> = Partial<{
  [TKey in Path<T>]: PathValue<T, TKey>
}>;

const converter = <T>(): FirestoreDataConverter<T> => ({
  toFirestore: (
    data: FirebaseFirestore.WithFieldValue<T>
  ): FirebaseFirestore.DocumentData => data as FirebaseFirestore.DocumentData,
  fromFirestore: (snap: FirebaseFirestore.QueryDocumentSnapshot) =>
    snap.data() as T,
});

const dataPoint = <T>(collectionPath: string) => firestore.collection(collectionPath).withConverter(converter<T>());

const db: FirestoreCollections = {
  users: dataPoint<User>('users'),
  firestore,
};

export { db, firestore };
