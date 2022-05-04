import isNumber from 'is-number'

export default (num: unknown): boolean => !isNumber(num)
