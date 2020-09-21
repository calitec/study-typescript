import React, { useState } from 'react';

interface MyFormProps {
  onSubmit: (form: { name: string; description: string }) => void;
}
// form의 값으로 사용 가능. 현재는 객체로 삽입.
// type Params = {
//   name: string;
//   description: string;
// }
// type MyFormProps = {
//   onSubmit: (form: { name: string; description: string }) => void;
// }

const MyForm = ({ onSubmit }: MyFormProps ) => {
  const [ form, setForm ] = useState({
    name: '',
    description: ''
  });

  const { name, description } = form;

  const onChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }
  const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description:''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange}/>
      <input name="description" value={description} onChange={onChange}/>
      <button type="submit">등록</button>
    </form>
  );
}


export default MyForm;