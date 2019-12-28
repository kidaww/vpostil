const User = use('App/Models/User');

async function LinenOrderSeeder(Factory) {
  await User.create({
    username: 'Admin',
    email: 'bulakhvad@gmail.com',
    password: '12345678', // TODO HASH+
  })
}

module.exports = LinenOrderSeeder;
