export function debounce(callback: (...args: any) => any, timeoutMs = 100) {
  let timeoutID;

  const debouncedCallback = (...args) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      callback.apply(this, args);
    }, timeoutMs);
  };

  debouncedCallback.cancel = () => {
    clearTimeout(timeoutID);
  };

  return debouncedCallback;
}

/**
 * Debounce for event handlers, ensuring the callback gets the un-nullified event object
 * - https://reactjs.org/docs/legacy-event-pooling.html
 */
export function debounceEventHandler(callback: (...args: any) => any, timeoutMs = 100) {
  let timeoutID;

  const debouncedCallback = (e: Event, ...rest: any) => {
    (e as any).persist();
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      callback(e, ...rest);
    }, timeoutMs);
  };

  debouncedCallback.cancel = () => {
    clearTimeout(timeoutID);
  };

  return debouncedCallback;
}
