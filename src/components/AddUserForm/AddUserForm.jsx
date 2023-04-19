import { Grid, GridItem, Input, Button, Heading } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { add } from "redux/users/users-slice";
import { nanoid } from "nanoid";
import { Notify } from "notiflix";

export const AddUserForm = () => {
const dispatch = useDispatch()
 const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const age = form.elements.age.value;
    if (!name || !age || !email) {
      Notify.failure('Sorry, but you didn&#180;t enter a value in the field')
      return
       }
    dispatch(add({
      id: nanoid(),
      name,
      email,
      age,
    }))

    form.reset();



  }
return ( <>
    <Heading textAlign="center">Add user in table</Heading>
    <form onSubmit={handleSubmit}>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 2fr)" }} gap={4}>
        <GridItem colSpan={{ base: "auto", md: 1 }}>
          <Input placeholder="Name" type="text" name="name" />
        </GridItem>
        <GridItem colSpan={{ base: "auto", md: 1 }}>
          <Input placeholder="Email" type="text" name="email" />
        </GridItem>
        <GridItem colSpan={{ base: "auto", md: 1 }}>
          <Input placeholder="Age" type="number" name="age" />
        </GridItem>
        <GridItem textAlign='center' colSpan={{ base: "auto", md: 2 }}>
          <Button type="submit">Add User</Button>
        </GridItem>
      </Grid>
    </form>    
  </>
  );
}        