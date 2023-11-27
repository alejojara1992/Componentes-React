import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('20');
  const ageAsNumber = Number(age);
  return (
    <>
      <div className='formInp'>
        <label>
          First name:
          <input
            className='inpt'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            className='inpt'
            value={age}
            onChange={e => setAge(e.target.value)}
            type="number"
          />
          <button className='bttn' onClick={() => setAge(ageAsNumber + 10)}>
            Add 10 years
          </button>
          <button className='bttn' onClick={() => setAge(ageAsNumber - 10)}>
            Remove 10 years
          </button>
        </label>
        {firstName !== '' &&
          <p>Your name is {firstName}.</p>
        }
        {ageAsNumber > 0 &&
          <p>Your age is {ageAsNumber}.</p>
        }
      </div>
    </>
  );
}