import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { Person } from '@stacks/profile';

const appConfig = new AppConfig(['store_write', 'publish_data']);

export const userSession = new UserSession({ appConfig });

export function authenticate() {
  showConnect({
    appDetails: {
      name: 'Freehold',
      icon: 'https://raw.githubusercontent.com/JoinFreehold/freehold-backend/master/Sample-01/src/assets/logo-icon.png',
    },
    redirectTo: '/profile',
    finished: () => {
      window.location.reload();
    },
    userSession: userSession,
  });
}

export function getUserData() {
  if (userSession.isUserSignedIn()) {
    return userSession.loadUserData()
   } else {
    return null;
   } 
}

export function getPerson() {
  if (userSession.isUserSignedIn()) {
    return new Person(getUserData().profile);
   } else {
    return null;
   }   
}