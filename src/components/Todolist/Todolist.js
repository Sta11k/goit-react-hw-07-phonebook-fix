import s from './Todolist.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/app/app-phonebook-selector';
import { useDeleteContactsMutation } from '../../redux/app/operation';
import { useState, useEffect } from 'react';

function Todolist({ contact }) {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactsMutation();
  const value = useSelector(getFilter);
  const [contasts, setContacts] = useState([]);
  useEffect(() => {
    const optimizedFilter = value.toLowerCase();
    try {
      setContacts(
        contact.filter(({ name }) =>
          name.toLowerCase().includes(optimizedFilter),
        ),
      );
    } catch (error) {
      return error;
    }
  }, [contact, value]);

  return (
    <ul className={s.contacts__list}>
      {contasts.map(({ id, name, phone, association }) => {
        return (
          <li key={id} className={s.item}>
            {' '}
            <p className={s.name__contact}>
              Association: {association} | <span> name: {name} | </span>
              <span>number: {phone} |</span>
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => deleteContacts(id)}
            >
              {' '}
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default Todolist;

// Todolist.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => {
//   const { filter } = state;
//   const optimizedFilter = filter.toLowerCase();
//   const vizibleCOntacts = state.contact.filter(contact =>
//     contact.name.toLowerCase().includes(optimizedFilter),
//   );

//   return { contactsOll: vizibleCOntacts };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onDeleteContact: id => dispatch(deleteContacts(id)),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
