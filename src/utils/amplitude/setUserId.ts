import {getInstance} from 'amplitude-js';

export const setUserId = (userId: string | null) => {
  if (typeof userId !== 'string' && userId !== null) {
    console.warn('userId must be string or null');
    return;
  }

  getInstance().setUserId(userId);
};
