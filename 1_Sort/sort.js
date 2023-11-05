//! text this is data
//? time this, what needs to be sorted

text.sort((a, b) => {
  const nameA = a.time;
  const nameB = b.time;

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;

  return 0;
});