const dotenv = require('dotenv');
const { login } = require('masto');

dotenv.config();

const TOKEN = process.env.MASTODON_APPLICATION_TOKEN;

// Kudos https://nitter.net/zurashu/status/1558637028132134912#m
module.exports = async function run (sz) {
  const masto = await login({
    url: 'https://layer8.space/',
    accessToken: TOKEN,
  });

  const toot = new Array(6)
    .fill()
    .map((_, i) => 6 * sz / 13312 > i ? '🟥':'🟩')
    .join('') + ` ${(sz / 1024).toFixed(2)} KiB / 13 KiB #js13k #js13kgames`;

  await masto.statuses.create({
    status: toot,
    visibility: 'direct',
  });
 
  console.log(toot);;
}
