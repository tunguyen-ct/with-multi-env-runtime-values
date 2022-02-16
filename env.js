const hasWindow = () => typeof window !== 'undefined';
const IS_SERVER = !hasWindow()
const IS_CLIENT = hasWindow()

export function getUniversalEnv(key, defaultValue) {
  if (IS_CLIENT && window[key]) return window[key]
  if (IS_SERVER && process.env[key]) return process.env[key]
  return defaultValue
}

export const universalEnv = {
  ENV: getUniversalEnv('ENV', 'com'),
  BASE_DOMAIN: getUniversalEnv('BASE_DOMAIN', 'com'),
}

const env = universalEnv.ENV;
const baseDomain = universalEnv.BASE_DOMAIN;

const config =  {
  env,
  baseDomain,
}

export default config