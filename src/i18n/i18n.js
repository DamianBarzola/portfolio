export async function loadTranslations(lang) {
  try {
    const translations = await import(`../${lang}.json`);
    return translations.default;
  } catch (error) {
    console.error(`Error loading translations for ${lang}:`, error);
    return {};
  }
}
