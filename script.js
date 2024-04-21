const fs = require('fs');

const userFile = 'user.json';

function readUsersFromFile() {
    try {
        const usersData = fs.readFileSync(userFile, 'utf8');
        return JSON.parse(usersData);
    } catch (e) {
        return [];
    }
}

function writeUsersToFile(users) {
    fs.writeFileSync(userFile, JSON.stringify(users), 'utf8');
}

function getUsers(iserId) {
    const users = readUsersFromFile();
    const user = users.find(user => user.id === userId);
    return user;
}

function createUser(newUser) {
    const users = readUsersFromFile();
    users.push(newUser);
    writeUsersToFile(users);
}

function updateUser(userId, updatedUser) {
    const users = readUsersFromFile();
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        users[userIndex] = {...users[userIndex], ...updatedUser};
        writeUsersToFile(users);
    }
}

function deleteUser(userId) {
    const users = readUsersFromFile();
    const updateUsers = users.filter(user => user.id !== userId);
    writeUsersToFile(updateUsers);
}

createUser({id: 1, name: 'Alice'});
createUser({id: 2, name: 'Bob'});
console.log(getUsers(1));

updateUser(2, {name: 'Frank'});
console.log(getUser(2));

deleteUser(1);
console.log(getUsers(1));

