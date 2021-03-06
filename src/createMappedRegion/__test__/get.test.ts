import { region } from './region';

const {
  getLoading,
  getValue,
  getFetchTime,
  getError,
  getProps,
  private_setState_just_for_test: private_setState,
} = region;

describe('get', () => {
  test('get things from nothing', () => {
    // NOTE loading is true because we want to display loading ui when state is undefined.
    private_setState({});
    expect(getLoading('a')).toEqual(true);
    expect(getValue('a')).toEqual(undefined);
    expect(getFetchTime('a')).toEqual(undefined);
    expect(getProps('a')).toEqual({
      loading: true,
      error: undefined,
      a: undefined,
    });

    // @ts-ignore
    expect(getLoading(['a', 'b'])).toEqual(true);
    // @ts-ignore
    expect(getValue(['a', 'b'])).toEqual([undefined, undefined]);
    // @ts-ignore
    expect(getFetchTime(['a', 'b'])).toEqual(undefined);
    // @ts-ignore
    expect(getProps(['a', 'b'])).toEqual({
      loading: true,
      error: undefined,
      a: undefined,
      b: undefined,
    });
  });

  test('get things from initial state', () => {
    private_setState({});
    expect(getLoading('a')).toEqual(true);
    expect(getValue('a')).toEqual(undefined);
    expect(getFetchTime('a')).toEqual(undefined);
    expect(getProps('a')).toEqual({
      loading: true,
      a: undefined,
    });

    // @ts-ignore
    expect(getLoading(['a', 'b'])).toEqual(true);
    // @ts-ignore
    expect(getValue(['a', 'b'])).toEqual([undefined, undefined]);
    // @ts-ignore
    expect(getFetchTime(['a', 'b'])).toEqual(undefined);
    // @ts-ignore
    expect(getProps(['a', 'b'])).toEqual({
      loading: true,
      a: undefined,
      b: undefined,
    });
  });

  test('get things from start loading', () => {
    private_setState({
      // @ts-ignore
      a: { loading: 1 },
    });
    expect(getLoading('a')).toEqual(true);
    expect(getValue('a')).toEqual(undefined);
    expect(getFetchTime('a')).toEqual(undefined);
    expect(getProps('a')).toEqual({
      loading: true,
      a: undefined,
    });

    // @ts-ignore
    expect(getLoading(['a', 'b'])).toEqual(true);
    // @ts-ignore
    expect(getValue(['a', 'b'])).toEqual([undefined, undefined]);
    // @ts-ignore
    expect(getFetchTime(['a', 'b'])).toEqual(undefined);
    // @ts-ignore
    expect(getProps(['a', 'b'])).toEqual({
      loading: true,
      a: undefined,
      b: undefined,
    });
  });

  test('treat undefined', () => {
    private_setState({
      // @ts-ignore
      a: { loading: 1 },
    });
    expect(getLoading('b')).toEqual(true);
    expect(getLoading('b')).toEqual(true);
  });

  test('get things from stop loading', () => {
    private_setState({
      // @ts-ignore
      a: {
        loading: 0,
        fetchTime: 999,
        result: { name: '66', type: 'cat' },
      },
    });
    expect(getLoading('a')).toEqual(false);
    expect(getValue('a')).toEqual({ name: '66', type: 'cat' });
    expect(getFetchTime('a')).toEqual(999);
    expect(getProps('a')).toEqual({
      loading: false,
      fetchTime: 999,
      a: { name: '66', type: 'cat' },
    });

    // @ts-ignore
    expect(getLoading(['a', 'b'])).toEqual(true);
    // @ts-ignore
    expect(getValue(['a', 'b'])).toEqual([{ name: '66', type: 'cat' }, undefined]);
    // @ts-ignore
    expect(getFetchTime(['a', 'b'])).toEqual(999);
    // @ts-ignore
    expect(getProps(['a', 'b'])).toEqual({
      loading: true,
      error : undefined,
      fetchTime: 999,
      a: { name: '66', type: 'cat' },
      b: undefined,
    });
  });

  test('getLoadings from all resolved', () => {
    private_setState({
      // @ts-ignore
      a: { loading: 0 },
      // @ts-ignore
      b: { loading: 0 },
    });
    // @ts-ignore
    expect(getLoading(['a', 'b'])).toEqual(false);
  });

  test('getErrors', () => {
    const errorA = new Error('error a');
    private_setState({
      // @ts-ignore
      a: {
        loading: 0,
        error: errorA,
      },
      // @ts-ignore
      b: {
        loading: 0,
        error: undefined,
      },
    });
    // @ts-ignore
    expect(getError(['a', 'b'])).toEqual(errorA);
    expect(getError('a')).toEqual(errorA);
    expect(getError('b')).toEqual(undefined);
    expect(getProps('a').error).toEqual(new Error('error a'));
    // @ts-ignore
    expect(getProps(['a', 'b']).error).toEqual(new Error('error a'));

    const errorB = new Error('error b');
    private_setState({
      // @ts-ignore
      a: {
        loading: 0,
        error: errorA,
      },
      // @ts-ignore
      b: {
        loading: 0,
        error: errorB,
      },
    });
    // @ts-ignore
    expect(getError(['a', 'b'])).toEqual(new Error('error a, error b'));
    // @ts-ignore
    expect(getProps(['a', 'b']).error).toEqual(new Error('error a, error b'));
  });
// tslint:disable-next-line:max-file-line-count
});
