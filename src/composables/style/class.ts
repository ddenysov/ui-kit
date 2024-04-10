import type { Responsive } from '../../../types/layout/responsive';
export const  useClass = <T>(props: string, value: string | undefined | Responsive<T>) => {
  if (value === undefined) {
    return {};
  }

  if (typeof value === 'object') {
    return Object.entries(value).map(({0: key, 1: item}) => {
      return { [`${key}:${props}-${item}`]: true };
    })

  }

  return { [`${props}-${value}`]: true };
}