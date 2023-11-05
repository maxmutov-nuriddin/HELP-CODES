//! todo.Category this is data 
//? === category this by which to filter
//! todos = todos this is the date on which the data is given

if (category !== "all") {
  todos = todos.filter((todo) => todo.Category === category);
  console.log(todos);
}