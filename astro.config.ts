import { defineConfig } from 'astro/config';
import { astroSpaceship } from 'astro-spaceship';
// テーマの設定を読み込む
import websiteConfig from 'astro-spaceship/config';

export default defineConfig({
  site: 'https://madoreenu314.github.io',
  base: '/til/',
  // ここにテーマの設定を流し込む必要があります
  integrations: [
    astroSpaceship(websiteConfig)
  ],
});