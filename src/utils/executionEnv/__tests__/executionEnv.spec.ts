import executionEnv from '../index'

describe('Execution environment', function test() {
  it('should be client side', function test() {
    window.ssr = false

    const result = executionEnv.isClientSide

    expect(result).toBe(true)
  })
})
