const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'stack', label: 'Stack System' },
  { id: 'variants', label: 'Variants' },
  { id: 'api', label: 'API' },
  { id: 'examples', label: 'Examples' },
];

const DocsSidebar = () => {
  return (
    <aside className='docs-sidebar'>
      <h3>Docs</h3>

      <nav>
        <ul>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default DocsSidebar;
