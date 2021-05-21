export const checkEmail = (_: any, value: string | undefined) => {
  if (value === undefined || value === 'example@example.com') {
    return Promise.resolve();
  }
  return Promise.reject(new Error('Введён неверный email'));
};
