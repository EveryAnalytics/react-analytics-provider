declare global {
  interface Window {
    ssr: boolean
  }
}

export const isClientSide = Boolean(
  typeof window !== 'undefined' && window.document && window.document.createElement
)

export const canUseEventListeners = isClientSide && Boolean(window.addEventListener)

const getExecutedEnv = () => {
  if (process.env.NODE_ENV === 'test') {
    return window.ssr
  }

  return {
    isClientSide,
    canUseEventListeners,
  }
}

export default executionEnv = getExecutedEnv()
