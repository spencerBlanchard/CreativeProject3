import * as React from 'react';
const Home = () => {

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };


  return (
    <div>
          <h1>Home</h1>
          
          <p> Hello world how are you </p>
            <label>
            <Checkbox
              label="I'm not a robot"
              value={checked}
              onChange={handleChange}
            />
            </label>
            
          <p>Is "My Value" checked? {checked.toString()}</p>
          
    </div>

  );

};


const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default Home;
