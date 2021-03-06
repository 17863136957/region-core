"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var increase = function (v) {
    if (v === void 0) { v = 0; }
    return v + 1;
};
var decrease = function (v) {
    if (v === void 0) { v = 0; }
    return v - 1 > 0 ? v - 1 : 0;
};
exports.createStore = function () {
    var state = {};
    var listeners = [];
    var ensure = function (key) {
        if (!state[key]) {
            state[key] = {};
        }
    };
    var emit = function () {
        listeners.forEach(function (listener) { return listener(); });
    };
    // only used for test
    var private_setState = function (value) {
        state = value;
    };
    var getAttribute = function (key, attribute) {
        var props = state[key];
        if (!props) {
            return undefined;
        }
        return props[attribute];
    };
    var load = function (payload) {
        var key = payload.key, promise = payload.promise;
        ensure(key);
        // since it is ensured
        var props = state[key];
        props.promise = promise;
        props.loading = increase(props.loading);
        emit();
        return state;
    };
    var loadEnd = function (payload) {
        var key = payload.key;
        ensure(key);
        // since it is ensured
        var props = state[key];
        props.loading = decrease(props.loading);
        emit();
        return state;
    };
    var set = function (payload) {
        var key = payload.key, result = payload.result, error = payload.error;
        ensure(key);
        // since it is ensured
        var props = state[key];
        var snapshot = props.result;
        var formatResult = typeof result === 'function' ? result(snapshot) : result;
        props.loading = decrease(props.loading);
        var fetchTime = new Date().getTime();
        props.fetchTime = fetchTime;
        props.result = formatResult;
        props.error = error; // as well error ===  undefined
        if (error) {
            console.error(error.message);
        }
        emit();
        return state;
    };
    var reset = function () {
        state = {};
        emit();
    };
    var subscribe = function (listener) {
        listeners.push(listener);
        return function () {
            listeners.splice(listeners.indexOf(listener), 1);
        };
    };
    return { getAttribute: getAttribute, private_setState: private_setState, load: load, loadEnd: loadEnd, set: set, reset: reset, subscribe: subscribe };
};
