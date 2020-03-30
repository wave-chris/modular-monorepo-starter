export namespace StringUtil {
  export function isBlank(value: string): boolean {
    if (typeof value !== 'string') {
      throw new Error('[StringUtil.isBlank] Type of the value is not string');
    }

    return (value === '') || (value.trim() === '');
  }
}
