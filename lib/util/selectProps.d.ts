import { LegacyKey, State, AnyObject } from '../types';
export declare const selectLoading: (loadings: (boolean | undefined)[]) => boolean | undefined;
export declare const selectError: (errors: Error[]) => Error | undefined;
export declare const selectFetchTime: (fetchTimes: (number | undefined)[]) => number | undefined;
export declare const selectResult: (keys: string[], results: any[]) => AnyObject;
export declare const formatLoading: (loading?: number | undefined) => boolean;
export declare const mapValues: (state: State | undefined, key: string | string[], format?: (v: any) => any) => any;
export declare const formatKeys: (key: LegacyKey) => {
    keys: string[];
    loadings: string[];
    results: string[];
    fetchTimes: string[];
    errors: string[];
};
