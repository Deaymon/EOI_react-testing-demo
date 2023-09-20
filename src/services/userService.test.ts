import { getUsers, getFiveUsers, newUser, createNewUser } from "./userService";
import { test } from '@jest/globals'

const mockedSuccessResponse = '::mockedSuccessResponse::';
const mockedFetch = {
    json: () => Promise.resolve(mockedSuccessResponse),
    status: 200,
};

// @ts-ignore
global.fetch = jest.fn();

afterEach(() => {
    jest.clearAllMocks();
});

describe('getUsers', () => {
    test('should call fetch and return users', async () => {
        (global.fetch as jest.Mock).mockImplementation(() => Promise.resolve(mockedFetch));
        const fetchCall = await getUsers();

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(fetchCall).toEqual(mockedFetch);
    });
});

describe('getFiveUsers', () => {
    test('should call fetch and return five users', async () => {
        (global.fetch as jest.Mock).mockImplementation(() => Promise.resolve(mockedFetch));
        const fetchCall = await getFiveUsers();
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(fetchCall).toEqual(mockedFetch);
    });
});

describe('newUser', () => {
  it('should return an object with name and username followed by number', () => {
    expect(newUser(2)).toEqual({ name: 'name2', username: 'username2' })
  })
});

jest.mock("./userService", () => ({
    ...jest.requireActual("./userService"),
    newUser: jest.fn(() => ({ name: 'name3', username: 'username3' }))
}))

describe('createNewUser', () => {
  it('should call fetch and post a new user', async () => {
    (global.fetch as jest.Mock).mockImplementation(() => Promise.resolve(mockedFetch));
    const fetchCall = await createNewUser(3);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(fetchCall).toEqual(mockedFetch);
  })
})

