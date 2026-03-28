type CodeFile = {
  filename: string;
  code: string;
  highlighted: string;
};

export interface DocsExampleClientProps {
  title: string;
  files: CodeFile[];
  children: React.ReactNode;
}
