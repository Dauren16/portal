export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info'
}

export const TOAST_TITLES: Record<ToastType, string> = {
  [ToastType.SUCCESS]: 'Успех',
  [ToastType.ERROR]: 'Ошибка',
  [ToastType.WARN]: 'Внимание',
  [ToastType.INFO]: 'Уведомление'
};