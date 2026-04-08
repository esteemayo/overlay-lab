import './Textarea.scss';

const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...props}
      className='textarea'
      aria-invalid={props['aria-invalid']}
    />
  );
};

export default Textarea;
