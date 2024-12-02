import qs from 'qs';

export function parseQueryParams<
  T extends { [key: string]: undefined | string | string[] },
>(str: string) {
  return qs.parse(str, { ignoreQueryPrefix: true }) as T;
}

export function stringifyQueryParams(obj: any) {
  return qs.stringify(obj, { arrayFormat: 'comma' });
}

export const appendQueryParams = (
  url: string,
  params: Record<string, string>,
) => {
  const [base, prevQueryString] = url.split('?');

  const prevParams = parseQueryParams(prevQueryString);

  const combinedSearchParams = stringifyQueryParams({
    ...prevParams,
    ...params,
  });

  if (!combinedSearchParams) return base;

  return `${base}?${combinedSearchParams}`;
};
