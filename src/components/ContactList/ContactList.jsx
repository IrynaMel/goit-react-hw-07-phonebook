import PropTypes from 'prop-types';
import Li from './ContactList.styled';
import Button from 'components/Button/Button';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.item.contacts);
  const filter = useSelector(state => state.filter);

  const visible = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <ul>
        {visible.map(({ id, name, number }) => (
          <Li key={id}>
            <p>
              {' '}
              {name}: {number}{' '}
            </p>
            <Button id={id} />
          </Li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  visible: PropTypes.array,
};

export default ContactList;
