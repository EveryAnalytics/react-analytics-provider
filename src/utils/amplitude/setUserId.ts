import amplitude from 'amplitude-js';

export const setUserId = (userId: string | null) => {
  const userId_ = userId === '' || userId === null ? null : userId
  amplitude.getInstance().setUserId(userId_)
};
