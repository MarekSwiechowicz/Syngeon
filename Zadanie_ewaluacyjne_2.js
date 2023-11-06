const data = [
  {
    timestamp: '2023-04-11 22:23:00+08:00',
    flour: 180,
    groat: 160,
    milk: 2650,
    egg: 88,
  },
  {
    timestamp: '2023-04-12 22:23:00+08:00',
    flour: 160,
    groat: 30,
    milk: 2550,
    egg: 95,
  },
  {
    timestamp: '2023-04-12 00:53:00+08:00',
    flour: 120,
    groat: 10,
    milk: 2850,
    egg: 64,
  },
  {
    timestamp: '2023-04-12 23:31:00+08:00',
    flour: 100,
    groat: 50,
    milk: 2600,
    egg: 99,
  },
  {
    timestamp: '2023-04-12 23:33:00+08:00',
    flour: 130,
    groat: 130,
    milk: 2700,
    egg: 52,
  },
  {
    timestamp: '2023-04-12 23:21:00+08:00',
    flour: 150,
    groat: 100,
    milk: 2900,
    egg: 53,
  },
  {
    timestamp: '2023-04-11 22:02:00+08:00',
    flour: 110,
    groat: 90,
    milk: 2250,
    egg: 86,
  },
  {
    timestamp: '2023-04-12 00:14:00+08:00',
    flour: 140,
    groat: 120,
    milk: 2500,
    egg: 37,
  },
  {
    timestamp: '2023-04-12 22:31:00+08:00',
    flour: 190,
    groat: 70,
    milk: 2050,
    egg: 57,
  },
  {
    timestamp: '2023-04-13 00:39:00+08:00',
    flour: 170,
    groat: 40,
    milk: 2100,
    egg: 36,
  },
];

function groupByDateAndHour(data) {
  const result = {};

  data.forEach((item) => {
    const date = item.timestamp.split(' ')[0];
    const hour = item.timestamp.split(' ')[1].split(':')[0];

    const key = `${date} ${hour}`;

    if (!result[key]) {
      result[key] = {
        flour: 0,
        groat: 0,
        milk: 0,
        egg: 0,
      };
    }

    result[key].flour += item.flour;
    result[key].groat += item.groat;
    result[key].milk += item.milk;
    result[key].egg += item.egg;
  });

  for (const key in result) {
    result[key].milk = Math.round(result[key].milk * 100) / 100;
    // You can add rounding for other ingredients if needed.
  }

  return result;
}

const groupedData = groupByDateAndHour(data);
console.log(groupedData);
