import { useState, useEffect } from 'react';
import { connect as rawConnect } from 'react-redux';
import * as shallowEqual from 'shallowequal';
import { getStore } from '../global/store';
import hoc, { prehoc } from '../util/hoc';
import { isValidConnectKey } from '../util/isValidConnectKey';
import { ConnectOptions } from '../types'

const Empty = () => null;

export default (Region) => {
  class RegionReact extends Region {
    connectWith = (key, Display, option) => {
      const { connect } = this;
      return connect(key, option)(Display);
    }

    connect = (key, { Loading, Error }: ConnectOptions = {}) => (Display = Empty) => {
      const { useProps, DefaultLoading, DefaultError } = this;
      if (!isValidConnectKey(key)) {
        console.error('invalid key, provide valid key or use connect from \'react-redux\' directly');
        return null;
      }
      const WrapperComponent = hoc({
        Display,
        Loading: Loading || DefaultLoading || Display,
        Error: Error || DefaultError || Display,
        useProps,
        key,
      });

      return WrapperComponent;
    }

    unstable_connect = (key, { Loading, Error }: ConnectOptions = {}) => (Display = Empty) => {
      if (isValidConnectKey(key)) {
        const { private_selectorFactory, DefaultLoading, DefaultError } = this;
        const WrapperComponent = prehoc(Display, Loading || DefaultLoading || Display, Error || DefaultError || Display);
        return rawConnect(private_selectorFactory(key))(WrapperComponent);
      }
      console.error('invalid key, provide valid key or use connect from \'react-redux\' directly');
      return rawConnect(key)(Display);
    }

    /**
     * There is only one store bound to all regions. App store is not related unless it is {@code provide()}
     * So it is unnecessary to check whether store is memoized
     * @see {
     *   @link https://gist.github.com/bvaughn/e25397f70e8c65b0ae0d7c90b731b189|
     *   Advanced example for manually managing subscriptions in an async-safe way using hooks
     * }
     * The link implies that this hook may broke in async mode.
     * Further information needed.
     */
    useProps = (key) => {
      const { getProps } = this;
      const store = getStore();
      const [props, setProps] = useState(getProps(key));
      useEffect(
        () => {
          const unsubscribe = store.subscribe(() => {
            const nextProps = getProps(key);
            if (!shallowEqual(props, nextProps)) {
              setProps(nextProps);
            }
          });
          return () => unsubscribe();
        },
        /**
         * effect should be changed with props, otherwise shallowEqual will never hit
         */
        [props],
      );
      return props;
    }
  }
  return RegionReact;
};
