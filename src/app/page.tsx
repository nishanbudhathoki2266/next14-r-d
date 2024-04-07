import { Suspense } from "react";

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

const TodoList = async () => {
  const todos = await getTodos();
  return <p>{todos.length}</p>;
};

export default function Home() {
  return (
    <>
      <h1>Todos</h1>
      <Suspense fallback={"Loading..."}>
        <TodoList />
      </Suspense>
    </>
  );
}
