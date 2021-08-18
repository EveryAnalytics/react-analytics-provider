type ConstraintType = boolean

export interface ExecutionEnv<T = ConstraintType> {
  isClientSide: T
  canUseEventListeners: T
}

export const isClientSide: ConstraintType = Boolean(
  typeof window !== 'undefined' && window.document && window.document.createElement
)

export const canUseEventListeners: ConstraintType = isClientSide && Boolean(window.addEventListener)

const executionEnv: ExecutionEnv = {
  isClientSide,
  canUseEventListeners,
}

export default executionEnv
