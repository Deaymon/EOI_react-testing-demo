export const getUsers = async (): Promise<any> => fetch(
    'https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
    }
);

export const getFiveUsers = async (): Promise<any> => fetch(
    'https://jsonplaceholder.typicode.com/users?_limit=5', {
        method: 'GET',
    }
);
