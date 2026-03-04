import './Textarea.scss';

const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea {...props} className='textarea' />;
};

export default Textarea;
