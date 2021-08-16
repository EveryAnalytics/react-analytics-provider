/**
 * Returns query parameters with object type (e.g. ?color=red -> {color: 'red})
 */
export function getQueryParams<T extends {[k: string]: string}>(): T {
  const search = window.location.search.substring(1);
  if (search === '') {
    return {} as T; // FIXME: 인자를 undefined로 바꿔서 return해야함
  }
  return JSON.parse(
    '{"' +
      decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}',
  );
}
