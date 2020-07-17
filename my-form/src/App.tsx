import React, { FC , useState, ChangeEvent, FormEvent } from 'react';

type formType = {
  name:string,
  description:string,
};

export type onSubmitFunc = (form:formType) => void;

type AppProps = {
  onSubmit:onSubmitFunc,
}

const App:FC<AppProps> = ({onSubmit}) => {
  const [form, setForm] = useState<formType>({
    name:"",
    description:"",
  });

  const { name, description } = form;
   
  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]:value,
    });
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name:"",
      description:"",
    });
  };

  return (
        <form onSubmit={handleSubmit}>
          <input name="name" value={name} onChange={onChange} />
          <input name="description" value={description} onChange={onChange} />
          <button type="submit">등록</button>
        </form>
    );
};

export default App;