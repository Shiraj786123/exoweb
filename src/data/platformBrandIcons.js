import androidIcon from '../assets/icons/brands/android.svg';
import appleIcon from '../assets/icons/apple-logo.svg';
import flutterIcon from '../assets/icons/brands/flutter.svg';
import reactIcon from '../assets/icons/react.svg';
import googleIcon from '../assets/icons/google-icon-logo.svg';
import googleMapsIcon from '../assets/icons/brands/googlemaps.svg';
import googleAnalyticsIcon from '../assets/icons/brands/googleanalytics.svg';
import googleSearchConsoleIcon from '../assets/icons/brands/googlesearchconsole.svg';
import openaiIcon from '../assets/icons/brands/openai.svg';
import geminiIcon from '../assets/icons/brands/googlegemini.svg';
import anthropicIcon from '../assets/icons/brands/anthropic.svg';
import metaIcon from '../assets/icons/brands/meta.svg';
import deepseekIcon from '../assets/icons/brands/deepseek.svg';
import mistralIcon from '../assets/icons/brands/mistral.svg';
import laravelIcon from '../assets/icons/laravel.svg';
import nextIcon from '../assets/icons/next.svg';
import nodeIcon from '../assets/icons/node.svg';
import mysqlIcon from '../assets/icons/mysql.svg';
import expressIcon from '../assets/icons/express.svg';
import awsIcon from '../assets/icons/aws.svg';
import postgresqlIcon from '../assets/icons/brands/postgresql.svg';

const resolveIcon = (icon) => {
  if (!icon) return null;
  if (typeof icon === 'string') return icon;
  return icon.src || icon.default || null;
};

export const PLATFORM_BRAND_ICONS = {
  android: resolveIcon(androidIcon),
  apple: resolveIcon(appleIcon),
  flutter: resolveIcon(flutterIcon),
  react: resolveIcon(reactIcon),
  google: resolveIcon(googleIcon),
  googlemaps: resolveIcon(googleMapsIcon),
  googleanalytics: resolveIcon(googleAnalyticsIcon),
  googlesearchconsole: resolveIcon(googleSearchConsoleIcon),
  googlebusiness: resolveIcon(googleIcon),
  openai: resolveIcon(openaiIcon),
  gemini: resolveIcon(geminiIcon),
  anthropic: resolveIcon(anthropicIcon),
  meta: resolveIcon(metaIcon),
  deepseek: resolveIcon(deepseekIcon),
  mistral: resolveIcon(mistralIcon),
  laravel: resolveIcon(laravelIcon),
  next: resolveIcon(nextIcon),
  node: resolveIcon(nodeIcon),
  mysql: resolveIcon(mysqlIcon),
  express: resolveIcon(expressIcon),
  aws: resolveIcon(awsIcon),
  postgresql: resolveIcon(postgresqlIcon),
};

export const getPlatformBrandIcon = (brand) => PLATFORM_BRAND_ICONS[brand] || null;
