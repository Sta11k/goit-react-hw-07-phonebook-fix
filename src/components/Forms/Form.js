import { useState } from 'react';
import s from './Form.module.css';
import { useAddContactsMutation } from '../../redux/app/operation';

function Form({ contact }) {
  const [addContacts] = useAddContactsMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [association, setAssociation] = useState('Other');

  const handleSabmit = e => {
    e.preventDefault();

    const repeatName = contact.reduce((acc, cont) => [...acc, cont.name], []);
    const repeatNumber = contact.reduce(
      (acc, cont) => [...acc, cont.phone],
      [],
    );

    if (repeatName.includes(name) || repeatNumber.includes(number)) {
      alert(`${name}  ${number} is already `);
      return;
    }

    if (repeatName.includes(name)) {
      alert(`${name}  is already `);
      return;
    }
    if (name === '' || number === '') {
      alert(`Enter data`);
      return;
    }
    let phone = number;
    const newContact = { name, phone, association };
    addContacts(newContact);
    // onSubmit(name, number, association);
    setName('');
    setNumber('');
    setAssociation('Other');
    //Дизпачим продукет в редакс
  };

  return (
    <form onSubmit={handleSabmit} className={s.m}>
      <h2 className={s.title}>Phonebook</h2>
      <label className={s.form__name}>
        Name
        <input
          // id={this.contactIdName}
          onChange={e => setName(e.currentTarget.value)}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.form__number}>
        Number
        <input
          // id={this.contactIdNumber}
          onChange={e => setNumber(e.currentTarget.value)}
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <div className={s.radio__btn}>
        <label>
          <input
            type="radio"
            name="association"
            value="Work"
            onChange={e => setAssociation(e.currentTarget.value)}
            checked={association === 'Work'}
          />
          Work
        </label>
        <label>
          <input
            type="radio"
            name="association"
            value="Family"
            onChange={e => setAssociation(e.currentTarget.value)}
            checked={association === 'Family'}
          />
          Family
        </label>
        <label>
          <input
            type="radio"
            name="association"
            value="Friends"
            onChange={e => setAssociation(e.currentTarget.value)}
            checked={association === 'Friends'}
          />
          Friends
        </label>
        <label>
          <input
            type="radio"
            name="association"
            value="Other"
            onChange={e => setAssociation(e.currentTarget.value)}
            checked={association === 'Other'}
          />
          Other
        </label>
      </div>
      <button type="submit">Add contacts</button>
    </form>
  );
}

export default Form;
