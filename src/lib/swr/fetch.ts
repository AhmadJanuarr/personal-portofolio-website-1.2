export const fetching = (url: string) => fetch(url).then((res) => res.json())
