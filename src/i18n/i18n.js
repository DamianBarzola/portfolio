export async function loadTranslations(lang) {
  try {
    const translations = await import(`../i18n/${lang}.json`);
    return translations;
  } catch (error) {
    console.error(`Error loading translations for ${lang}:`, error);
    return {};
  }
}
