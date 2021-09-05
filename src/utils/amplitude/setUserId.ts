import amplitude from 'amplitude-js';

export const setUserId = (userId: string | null) => {
  if (userId !== null && !userId) {
    console.info('userId is required for setUserId');
    return;
  }

  if (typeof userId !== 'string' && userId !== null) {
    console.info('userId must be string or null');
    return;
  }

  amplitude.getInstance().setUserId(userId);
};
