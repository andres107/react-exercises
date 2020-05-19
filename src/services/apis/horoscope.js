const axios = require('axios').default;

export async function getHoroscope(sign) {
  const response = await axios.get("https://www.horoscopes-and-astrology.com/json");
  return {
    sign: sign,
    dates: response.data.dates[sign],
    content: response.data.dailyhoroscope[sign].replace(/<.*>/g,'')
  };
}

export default getHoroscope;

