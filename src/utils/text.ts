export const uuid = () => {
  return (Math.random() + 1).toString(36).substring(2);
};

export const transformDate = (value:any) => {
  const currentDate = new Date(value);
  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();
  const shortMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = shortMonth[monthIndex];
  return `${month} ${year}`;
};