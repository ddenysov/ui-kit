import type { Responsive } from '../../../types/layout/responsive';
export const  useClass = <T>(props: string, value: string | number | undefined | Responsive<T>) => {
  if (value === undefined) {
    return {};
  }

  if (typeof value === 'object') {
    return Object.entries(value).map(({0: key, 1: item}) => {
      return item === '' ? { [`${key}:${props}`]: true } : { [`${key}:${props}-${item}`]: true };
    })

  }

  return value === '' ? { [`${props}`]: true } : { [`${props}-${value}`]: true };
}

export const  useBooleanClass = (props: string, value: boolean | undefined) => {
  if (value === undefined) {
    return {};
  }

  return { [`${props}`]: value };
}