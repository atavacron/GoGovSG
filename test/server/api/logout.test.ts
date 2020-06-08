import httpMocks from 'node-mocks-http'
import sinon from 'sinon'
import { logOut } from '../../../src/server/api/logout/handlers'

describe('logout api tests', () => {
  it('should destroy session', () => {
    const destroySpy = sinon.fake()
    const okSpy = sinon.fake()
    const req = httpMocks.createRequest({
      session: {
        destroy: destroySpy as any,
      },
    })
    const res = httpMocks.createResponse() as any
    res.ok = okSpy
    logOut(req, res)
    expect(destroySpy.called).toBeTruthy()
    destroySpy.getCalls()[0].args[0]()
    expect(res.ok.called).toBeTruthy()
  })

  it('should send server error when no session', () => {
    const serverErrorSpy = sinon.fake()
    const okSpy = sinon.fake()
    const req = httpMocks.createRequest()
    const res = httpMocks.createResponse() as any
    res.serverError = serverErrorSpy
    res.ok = okSpy
    logOut(req, res)
    expect(serverErrorSpy.called).toBeTruthy()
    expect(res.ok.called).toBeFalsy()
  })
})