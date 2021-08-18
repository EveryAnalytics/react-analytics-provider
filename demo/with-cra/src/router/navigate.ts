function push(href: string) {
  window.history.pushState({}, '', href);
  const navEvent = new PopStateEvent('popstate');
  window.dispatchEvent(navEvent);
}

const navigate = {
  push,
};

export default navigate;
