import { chromium } from 'playwright';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helper for smooth scrolling
async function smoothScroll(page, distance, durationMs) {
  const steps = 60;
  const stepDistance = distance / steps;
  const stepDelay = durationMs / steps;
  for (let i = 0; i < steps; i++) {
    await page.evaluate((dist) => window.scrollBy(0, dist), stepDistance);
    await new Promise(resolve => setTimeout(resolve, stepDelay));
  }
}

async function run() {
  const outputDir = join(__dirname, '../recordings');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Iniciando o Chromium...');
  const browser = await chromium.launch({
    headless: false, // Set to false to visually see what is happening if running locally
  });

  const context = await browser.newContext({
    viewport: { width: 1080, height: 1920 },
    screen: { width: 1080, height: 1920 },
    deviceScaleFactor: 2,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true,
    recordVideo: {
      dir: outputDir,
      size: { width: 1080, height: 1920 }
    }
  });

  const page = await context.newPage();
  console.log('Navegando para design.sestepa.com...');
  await page.goto('https://design.sestepa.com/es/', { waitUntil: 'networkidle' });

  // 1. Home Page scroll
  console.log('Simulando scroll na Home...');
  await new Promise(resolve => setTimeout(resolve, 2000));
  await smoothScroll(page, 1200, 4000);
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Navigate to Portfolio page/section
  console.log('Navegando para o Portfolio...');
  const portfolioBtn = page.locator('a[href*="/portfolio/"], a[href*="/es/#portfolio"]');
  if (await portfolioBtn.count() > 0) {
    await portfolioBtn.first().click();
  } else {
    await page.goto('https://design.sestepa.com/es/#portfolio', { waitUntil: 'networkidle' });
  }
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Projects to visit
  const projects = [
    { filter: 'button[data-filter="estate"]', slug: 'finca-garden-campos-mallorca' },
    { filter: 'button[data-filter="estate"]', slug: 'sant-llorenc' },
    { filter: 'button[data-filter="residential"]', slug: 'crestatx-garden-design' },
    { filter: 'button[data-filter="terrace"]', slug: 'terrace-garden-in-palma' }
  ];

  for (const proj of projects) {
    console.log(`Filtrando por: ${proj.filter}...`);
    const filterBtn = page.locator(proj.filter);
    if (await filterBtn.count() > 0) {
      await filterBtn.first().click();
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log(`Abrindo projeto: ${proj.slug}...`);
    // Find project card/link with slug
    const projLink = page.locator(`a[href*="${proj.slug}"]`);
    if (await projLink.count() > 0) {
      await projLink.first().click();
      await page.waitForLoadState('networkidle');
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Scroll detail page
      console.log(`Visualizando ${proj.slug}...`);
      await smoothScroll(page, 1500, 5000);
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Go back to portfolio
      console.log('Retornando ao portfólio...');
      await page.goBack();
      await page.waitForLoadState('networkidle');
      await new Promise(resolve => setTimeout(resolve, 1500));
    } else {
      console.warn(`Projeto ${proj.slug} não encontrado via link. Navegando diretamente.`);
      await page.goto(`https://design.sestepa.com/es/${proj.slug}/`, { waitUntil: 'networkidle' });
      await new Promise(resolve => setTimeout(resolve, 1500));
      await smoothScroll(page, 1500, 5000);
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.goto('https://design.sestepa.com/es/#portfolio', { waitUntil: 'networkidle' });
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
  }

  // Loop continuo: voltar para o topo da homepage
  console.log('Retornando ao topo da homepage para fechar o loop...');
  await page.goto('https://design.sestepa.com/es/', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(resolve => setTimeout(resolve, 2000));

  await context.close();
  await browser.close();
  console.log('Vídeo gravado com sucesso na pasta recordings!');
}

run().catch(console.error);
