type CodeFile = {
  filename: string;
  code: string;
};

export interface DocsExampleProps {
  title: string;
  files: CodeFile[];
  children: React.ReactNode;
}
