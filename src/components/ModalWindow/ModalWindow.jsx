import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    FormControl,
    FormLabel,
    Input,

} from "@chakra-ui/react";
 import { Notify } from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "redux/users/users-slice";
import { getIsOpen } from "redux/modal/modal-selector";
import { isOpen } from "redux/modal/modal-slice";

export function ModalWindow({id,values}) {
    const open = useSelector(getIsOpen)
  const dispatch = useDispatch();
  const { name, email, age } = values;


  

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

  
    dispatch(edit({id, name:name,email:email, age:age  }))
          dispatch(isOpen())
    }
  return (
      <Modal isOpen={open} onClose={()=>dispatch(isOpen())}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Please make changes</ModalHeader>
              <ModalBody>
                  <form onSubmit={handleSubmit}>
           <FormControl>
            <FormLabel>Name</FormLabel>
                      <Input
                            placeholder="Name"
                            type="text"
                            name="name"
                            defaultValue={name}
                      />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
                      <Input
                            placeholder="email"
                            type="email"
                            name="email"
                            defaultValue={email}
                      />
                      </FormControl>
          <FormControl mt={4}>
            <FormLabel>Age</FormLabel>
                      <Input
                            placeholder="Age"
                            type="age"
                            name="age"
                            defaultValue={age}
                      />
                      </FormControl>
                      <div style={{ display: 'flex', justifyContent: 'end', gap: '10px', margin: '10px' }} >
                          <Button type="submit" colorScheme="blue" >Save</Button>

                      <Button variant="outline" mr={3} onClick={()=>dispatch(isOpen())}>
            Cancel
          </Button></div>

</form>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
