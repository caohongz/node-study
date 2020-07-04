module.exports = (compose) => {
  it("同步函数", async () => {
    const mockFn = jest.fn();

    // const mockFn = console.log;
    const middlewares = [
      (next) => {
        mockFn("1 start");
        // console.log("1", mockFn.mock.calls);

        next();
        // console.log("2", mockFn.mock.calls);

        mockFn("1 end");
      },
      (next) => {
        mockFn("2 start");
        // console.log("3", mockFn.mock.calls);

        next();
        // console.log("4", mockFn.mock.calls);

        mockFn("2 end");
      },
    ];
    compose(middlewares)();

    const calls = mockFn.mock.calls;
    expect(calls.length).toBe(4);
    expect(calls[0][0]).toBe("1 start");
    expect(calls[1][0]).toBe("2 start");
    expect(calls[2][0]).toBe("2 end");
    expect(calls[3][0]).toBe("1 end");
  });

  it("异步函数", async () => {
    const mockFn = jest.fn();
    const middlewares = [
      (next) =>
        new Promise((resolve) => {
          mockFn("1 start");
          // console.log("1", mockFn.mock.calls);

          next().then(() => {
            mockFn("1 end");
            // console.log("2", mockFn.mock.calls);

            resolve();
          });
        }),
      async (next) => {
        mockFn("2 start");
        // console.log("3", mockFn.mock.calls);

        await next();
        mockFn("2 end");
        // console.log("4", mockFn.mock.calls);
      },
    ];
    await compose(middlewares)();

    const calls = mockFn.mock.calls;
    expect(calls.length).toBe(4);
    expect(calls[0][0]).toBe("1 start");
    expect(calls[1][0]).toBe("2 start");
    expect(calls[2][0]).toBe("2 end");
    expect(calls[3][0]).toBe("1 end");
  });
  it("0个函数", async () => {
    const mockFn = jest.fn();
    const middlewares = [];
    const ret = await compose(middlewares)();
  });
  it("1个函数", async () => {
    const mockFn = jest.fn();
    const middlewares = [
      async (next) => {
        mockFn("1 start");
        await next();
        mockFn("1 end");
      },
    ];
    await compose(middlewares)();

    const calls = mockFn.mock.calls;
    expect(calls.length).toBe(2);
    expect(calls[0][0]).toBe("1 start");
    expect(calls[1][0]).toBe("1 end");
  });
  it("3个函数", async () => {
    const mockFn = jest.fn();
    const middlewares = [
      async function fun1(next) {
        mockFn("1 start");
        await next();
        mockFn("1 end");
      },
      async function fun2(next) {
        mockFn("2 start");
        await next();
        mockFn("2 end");
      },
      async function fun3(next) {
        mockFn("3 start");
        await next();
        mockFn("3 end");
      },
    ];
    await compose(middlewares)();

    const calls = mockFn.mock.calls;
    expect(calls.length).toBe(6);
    expect(calls[0][0]).toBe("1 start");
    expect(calls[1][0]).toBe("2 start");
    expect(calls[2][0]).toBe("3 start");
    expect(calls[3][0]).toBe("3 end");
    expect(calls[4][0]).toBe("2 end");
    expect(calls[5][0]).toBe("1 end");
  });

  it("混合同步异步的情况", async () => {
    const mockFn = jest.fn();
    const middlewares = [
      async (next) => {
        mockFn("1 start");
        next();
        mockFn("1 end");
      },
      (next) => {
        mockFn("2 start");
        mockFn("2 end");
      },
    ];
    await compose(middlewares)();

    const calls = mockFn.mock.calls;
    expect(calls.length).toBe(4);
    expect(calls[0][0]).toBe("1 start");
    expect(calls[1][0]).toBe("2 start");
    expect(calls[2][0]).toBe("2 end");
    expect(calls[3][0]).toBe("1 end");
  });
};
