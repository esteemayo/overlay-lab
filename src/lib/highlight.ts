import { createHighlighter } from 'shiki';

export const highlightCode = async (code: string) => {
  const highlighter = await createHighlighter({
    themes: ['night-owl', 'night-owl'],
    langs: ['tsx'],
  });

  return {
    dark: highlighter.codeToHtml(code, {
      lang: 'tsx',
      theme: 'night-owl',
    }),
    light: highlighter.codeToHtml(code, {
      lang: 'tsx',
      theme: 'night-owl',
    }),
  };
};
