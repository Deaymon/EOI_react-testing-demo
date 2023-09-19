export const getUsers = async (): Promise<any> => fetch(
    'https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
    }
);

export const getFiveUsers = async (): Promise<any> => fetch(
    'https://jsonplaceholder.typicode.com/users?_limit=5', {
        method: 'GET'
    }
);

export const newUser = (userNumber: number) => ({
    name: `name${userNumber}`,
    username: `username${userNumber}`
})

export const createNewUser = async (userNumber: number): Promise<any> => {
    const user = newUser(userNumber)
    return fetch(
        'https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(user)
        }
    )
};