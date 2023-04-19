import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, IconButton, Portal } from '@chakra-ui/react';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { EditIcon,DeleteIcon } from '@chakra-ui/icons'
import { useSelector,useDispatch  } from 'react-redux';
import {ModalWindow} from 'components/ModalWindow/ModalWindow';
import { getUsers } from 'redux/users/users-selector';
import {remove} from 'redux/users/users-slice'
import { getIsOpen } from 'redux/modal/modal-selector';
import { isOpen } from 'redux/modal/modal-slice';

export const TableUsers = () => {  
  const [id, setId] = useState();
  const users = useSelector(getUsers);
  const isOpenModal = useSelector(getIsOpen);
  const dispatch = useDispatch()
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');



  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    const fieldA = a[sortBy];
    const fieldB = b[sortBy];
    if (fieldA < fieldB) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (fieldA > fieldB) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const renderSortIcon = (field) => {
    if (sortBy === field) {
      return sortOrder === 'asc' ? <FaSortUp /> : <FaSortDown />;
    }
    return <FaSort />;
  };
  const findContact = id => {
    return users?.find(item => item.id === id);
  };

  return (<>
    <Table width='600px' variant="striped" colorScheme="blue" borderRadius="md">
    <Thead bg="gray.50">
      <Tr key="0">
        <Th fontSize="md" color="gray.600" fontWeight="medium" p={2} borderBottom="1px solid" borderColor="gray.300">
          Id
        </Th>
        <Th fontSize="md" color="gray.600" fontWeight="medium" p={2} borderBottom="1px solid" borderColor="gray.300">
          Name
          <IconButton
            aria-label="Sort by name"
            variant="ghost"
            icon={renderSortIcon('name')}
            ml="2"
            onClick={() => handleSort('name')}
          />
        </Th>
        <Th fontSize="md" color="gray.600" fontWeight="medium" p={2} borderBottom="1px solid" borderColor="gray.300">
          Email
          <IconButton
            aria-label="Sort by email"
            variant="ghost"
            icon={renderSortIcon('email')}
            ml="2"
            onClick={() => handleSort('email')}
          />
        </Th>
        <Th fontSize="md" color="gray.600" fontWeight="medium" p={2} borderBottom="1px solid" borderColor="gray.300">
          Age
          <IconButton
            aria-label="Sort by age"
            variant="ghost"
            icon={renderSortIcon('age')}
            ml="2"
            onClick={() => handleSort('age')}
          />
        </Th>
        <Th>Edit or Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
      {sortedUsers.map((user) => (<>
        <Tr key={user.id} borderBottom="1px solid" borderColor="gray.300">
          <Td  fontSize="md" color="gray.600" fontWeight="medium" p={2}>
            {user.id}
          </Td>
          <Td fontSize="md" color="gray.600" fontWeight="medium" p={2}>
            {user.name}
          </Td>
          <Td fontSize="md" color="gray.600" fontWeight="medium" p={2}>
            {user.email}
          </Td>
          <Td fontSize="md" color="gray.600" fontWeight="medium" p={2}>
            {user.age}
          </Td>
          <Td> <IconButton
      icon={<EditIcon />}
      aria-label="Edit"
      colorScheme="blue"
      variant="ghost"
      onClick={() => { dispatch(isOpen()); setId(user.id) }}
    />
    <IconButton
    onClick={() => dispatch(remove(user.id))}
      icon={<DeleteIcon />}
      aria-label="Delete"
      colorScheme="blue"
      variant="ghost"
    /></Td>
        </Tr>
        {/* <Portal>  {isOpenModal && <ModalWindow  id={id} values={findContact(id)} />}</Portal> */}
        </>
      ))}
      
    </Tbody>
  </Table>
  <Portal>  {isOpenModal && <ModalWindow  id={id} values={findContact(id)} />}</Portal></>
  );
};