export interface User {
  id?: string;
  email?: string;
  avatar?: string;
  phone?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  role?: 'admin' | 'customer';
  uiTheme?: 'dark' | 'light';
  isInitial?: boolean;
  createdAt?: FirebaseFirestore.Timestamp;
  updatedAt?: FirebaseFirestore.Timestamp;
}
