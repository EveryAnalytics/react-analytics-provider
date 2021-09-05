import amplitude from 'amplitude-js';

export const setUserId = (userId: string | null) => {
  if (userId !== null && !userId) {
    console.warn('userId is required for setUserId');
    return;
  }

  if (typeof userId !== 'string' && userId !== null) {
    console.warn('userId must be a string or null');
    return;
  }

  amplitude.getInstance().setUserId(userId);
};
