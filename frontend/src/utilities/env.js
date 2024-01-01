export const isDev = () => process.env.NEXT_PUBLIC_ENVIRONMENT !== 'production';

export const isProd = () =>
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'production';