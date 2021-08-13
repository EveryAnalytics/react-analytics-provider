export function getQueryParams<T extends { [k: string]: string }>(): T {
  // const searchParams = new URLSearchParams(window.location.search);
  // console.log({ searchParams });
  var search = window.location.search.substring(1);
  return JSON.parse(
    '{"' +
      decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
}
