/**
 * Returns query parameters with object type (e.g. ?color=red -> {color: 'red})
 */
export function getQueryParams<T extends { [k: string]: string }>(): T {
  const search = window.location.search.substring(1);
  return JSON.parse(
    '{"' +
      decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
}
