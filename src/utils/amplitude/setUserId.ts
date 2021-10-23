import {getInstanceSafely} from './getInstanceSafely';

export const setUserId = async (userId: string | null) => {
  if (typeof userId !== 'string' && userId !== null) {
    console.warn('userId must be string or null');
    return;
  }
  const instance = await getInstanceSafely();
  instance.setUserId(userId);
};
