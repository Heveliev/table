import { AddUserForm } from "./AddUserForm/AddUserForm";
import { TableUsers } from "./TableUsers/TableUsers";
import { Center, Heading ,ChakraProvider } from "@chakra-ui/react";


export const App = () => {
 return (<>
  <ChakraProvider>
    
   <AddUserForm/>
<Center  padding='20px'>  <Heading textAlign="center">User table made in React</Heading></Center>
 <Center> <TableUsers/></Center>
 </ChakraProvider>
 </>
 )
};
