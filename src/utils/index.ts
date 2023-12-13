export const convertFirstCharToUpperCase = (str: string) => {
  if (str.length > 3) {
    return str[0].toLocaleUpperCase() + str.slice(1).toLowerCase();
  }
  return str;
}

export const sliceURL = (str: string) => {
  const sliceHttp = str.split('//')[1].length ? str.split('//')[1] : str;
  return sliceHttp.split('.')[0] === 'www' ? sliceHttp.split('.')[1] : sliceHttp;
}