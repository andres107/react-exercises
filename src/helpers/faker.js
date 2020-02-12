import faker from 'faker';

export function createRandomUsers(total) {
  let users = []
  for(let i = 0; i < total; i++) {
    users.push({
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      job: faker.name.jobTitle(),
      active: faker.random.boolean()
    });
  }
  return users;
}

export default createRandomUsers;
