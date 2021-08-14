function push(href: string) {
  window.history.pushState({}, "", href);
}

const navigate = {
  push,
};

export default navigate;
