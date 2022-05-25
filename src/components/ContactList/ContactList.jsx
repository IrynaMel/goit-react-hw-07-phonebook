// import PropTypes from 'prop-types';
import { Li, Div } from './ContactList.styled';
import Button from 'components/Button/Button';
import { useGetContactsQuery } from 'redux/Contact';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const { data, isLoading } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);

  const visible = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <Div>
      {isLoading && <ClipLoader />}
      {data && (
        <ul>
          {visible.map(({ id, name, phone }) => (
            <Li key={id}>
              <p>
                {' '}
                {name}: {phone}{' '}
              </p>
              <Button id={id} />
            </Li>
          ))}
        </ul>
      )}
      {visible?.length === 0 && <p>no contacts</p>}
    </Div>
  );
};

// ContactList.propTypes = {
//   visible: PropTypes.array,
// };

export default ContactList;
