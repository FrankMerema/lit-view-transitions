import {transitionHelperInput} from '../models';

export const transitionHelper = ({
  skipTransition = false,
  classNames = [],
  updateDOM,
}: transitionHelperInput) => {
  // @ts-expect-error startViewTransition is not yet known in the document api
  if (skipTransition || !document.startViewTransition) {
    const updateCallbackDone = Promise.resolve(updateDOM()).then(() => {});
    const ready = Promise.reject(Error('View transitions unsupported'));

    // Avoid spamming the console with this error unless the promise is used.
    ready.catch(() => {});

    return {
      ready,
      updateCallbackDone,
      finished: updateCallbackDone,
      skipTransition: () => {},
    };
  }

  document.documentElement.classList.add(...classNames);

  // @ts-expect-error startViewTransition is not yet known in the document api
  const transition = document.startViewTransition(updateDOM);

  transition.finished.finally(() =>
    document.documentElement.classList.remove(...classNames)
  );

  return transition;
};
