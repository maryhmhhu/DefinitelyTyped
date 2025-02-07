// Type definitions for @alpinejs/focus 3.13
// Project: https://github.com/alpinejs/alpine
// Definitions by: Brian Surowiec <https://github.com/xt0rted>
//                 Eric Kwoka <https://github.com/ekwoka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.6

import type { PluginCallback } from 'alpinejs';

declare const focusPlugin: PluginCallback;

export default focusPlugin;

interface $focus {
    within(el: Element): $focus;
    withoutScrolling(): $focus;
    noscroll(): $focus;
    withWrapAround(): $focus;
    wrap(): $focus;
    focusable(el: Element): boolean;
    previouslyFocused(): Element | undefined;
    lastFocused(): Element | undefined;
    focused(): Element | undefined;
    focusables(): Element[];
    all(): Element[];
    isFirst(el: Element): boolean;
    isLast(el: Element): boolean;
    getFirst(): Element | undefined;
    getLast(): Element | undefined;
    getNext(): Element | undefined;
    getPrevious(): Element | undefined;
    first(): Element | undefined;
    last(): Element | undefined;
    next(): Element | undefined;
    previous(): Element | undefined;
    prev(): Element | undefined;
    focus(el: Element): void;
}

declare module 'alpinejs' {
    interface Magics<T> {
        $focus: $focus;
    }
}
