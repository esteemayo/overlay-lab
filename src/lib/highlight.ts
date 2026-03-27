import { createHighlighter } from 'shiki';

export const highlightCode = async (code: string) => {
  const highlighter = await createHighlighter({
    themes: ['night-owl'],
    langs: ['tsx'],
  });

  return highlighter.codeToHtml(code, {
    lang: 'tsx',
    theme: 'night-owl',
  });
};
