import { createHighlighter } from 'shiki';

export const highlightCode = async (code: string, filename?: string) => {
  const lang = filename?.endsWith('.scss')
    ? 'scss'
    : filename?.endsWith('.md')
      ? 'markdown'
      : 'tsx';

  const highlighter = await createHighlighter({
    themes: ['night-owl'],
    langs: ['tsx', 'scss', 'markdown'],
  });

  return highlighter.codeToHtml(code, {
    lang,
    theme: 'night-owl',
  });
};
