import { v4 as uuidv4 } from 'uuid';



let users =[];

export const createUser = (request, response)=>{
    const user = request.body;
    users.push({...user, id: uuidv4()});
    response.send(`The user with the name ${user.firstName} ${user.lastName} added to the database`);

}

export const getUsers = (request,response)=>{
    response.send(users);
}

export const getUsersbyId = (request,response)=>{
    const {id} = request.params;
    const foundUser = users.find((user)=>user.id===id)
    response.send(foundUser);
}

export const deleteUsers = (request, response)=>{
    const {id} =request.params;
    users = users.filter((user) => user.id != id)
    response.send(`Users with id = ${id} deleted from the Database`)
}

export const patchUsers =  (request,response)=>{
    const {id} = request.params;
    const {firstName, lastName, age}=request.body;
    const user = users.find((user)=>user.id == id);
    if(firstName){
        user.firstName=firstName;
    }
    if (lastName){
        user.lastName = lastName;
    }
    if(age){
        user.age=age;
    }

    response.send(`User with the id = ${id} has been inserted`);
}