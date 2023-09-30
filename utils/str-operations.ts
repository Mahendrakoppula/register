export const acceptString = (value: string) => {
  // Accept only string
  const regex = new RegExp(/^[a-zA-Z\s]*$/);
  return regex.test(value);
};

export const acceptNumbers = (value: string) => {
  // Accept only numbers
  const regex = new RegExp(/^[0-9]*$/);
  return regex.test(value);
};

export const removeSpace = (value: string) => {
  // Remove all spaces
  const regex = new RegExp(/\s/g);
  return value.replace(regex, '');
};

export function isUrl(string: any) {
  const regex = RegExp(/^(https?| ftp):\/\/[^\s/$.?#/][^\s]*$/i);
  return regex.test(string);
}

export function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = [
    'Bytes',
    'KiB',
    'MiB',
    'GiB',
    'TiB',
    'PiB',
    'EiB',
    'ZiB',
    'YiB',
  ];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
