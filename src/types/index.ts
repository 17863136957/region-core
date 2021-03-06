// public
export type Strategy = 'acceptLatest' | 'acceptEvery';

export interface RegionOption {
  strategy: Strategy;
}

// useProps
export type LegacyKey<K> = K | K[];

// connect
export interface ConnectOption {
  Loading?: any;
  Error?: any;
}

// set & load
// set
export type ResultFunc<V> = (snapshot?: V) => V;
export type ResultFuncPure<V> = (snapshot: V) => V;

// load
export type AsyncFunction<TParams, TResult> = (params: TParams) => Promise<TResult>;
// actually we supports Promise<TResult> | TResult, but it is not supported in Type
export type AsyncFunctionOrPromise<TParams, TResult> = AsyncFunction<TParams, TResult>;

type Reducer<TParams, TResult, V> = (state: V | undefined, result: TResult, params: TParams) => V;
type ReducerPure<TParams, TResult, V> = (state: V, result: TResult, params: TParams) => V;

export interface LoadOption<TParams, TResult, V> {
  reducer?: Reducer<TParams, TResult, V>;
  forceUpdate?: boolean;
  params?: TParams;
}

export interface LoadOptionPure<TParams, TResult, V> {
  reducer?: ReducerPure<TParams, TResult, V>;
  forceUpdate?: boolean;
  params?: TParams;
}

export type OptionOrReducer<TParams, TResult, V> = LoadOption<TParams, TResult, V> | Reducer<TParams, TResult, V>;

export type OptionOrReducerPure<TParams, TResult, V> = LoadOptionPure<TParams, TResult, V> | ReducerPure<TParams, TResult, V>;

// private
// get
// reducer

export interface LoadPayload<K, TResult> {
  key: K;
  promise: Promise<TResult>;
}

export interface Payload<T, K extends keyof T> {
  key: K;
  result?: T[K];
  error?: any;
}

// internal
export interface Props<V> {
  loading?: number;
  result?: V;
  promise?: Promise<unknown>;
  error?: any;
  fetchTime?: number;
}

export type State<T> = {
  [P in keyof T]?: Props<T[P]>;
};
