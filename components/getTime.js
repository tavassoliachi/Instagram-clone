export const getDate = (actionDate) => {
  let delta = Date.now() - actionDate;

  let dateTypes = [
    { title: "seconds", value: 1000 },
    { title: "minutes", value: 60 },
    { title: "hours", value: 60 },
    { title: "days", value: 24 },
    { title: "weeks", value: 7 },
  ];

  let returnValue = { title: "", value: 0 };

  let ans = delta;
  dateTypes.forEach(({ title, value }) => {
    ans = ans / value;
    if (ans >= 1) {
      returnValue = { title: title, value: Math.floor(ans) };
    }
  });

  return returnValue;
};
