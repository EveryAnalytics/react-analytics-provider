export const isClientSide = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);

export const canUseEventListeners = isClientSide && Boolean(window.addEventListener);

export const executionEnv = {
  isClientSide,
  canUseEventListeners,
};
