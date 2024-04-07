const getTodos = async () => {
  // throw new Error("FUCKING WRONG");
  await wait(3000);
  return fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json()
  );
};

const wait = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <h1>Todos</h1>
      <p>{todos.length}</p>
    </>
  );
}
