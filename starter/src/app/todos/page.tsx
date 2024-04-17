import Link from "next/link";
import React from "react";

const wait = (duration: number) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

const getTodos = async () => {
  await wait(5000);
  return await fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );
};

const TodosPage = async () => {
  const todos = await getTodos();

  return (
    <div className="mt-2 p-4">
      {todos.map((todo) => (
        <Link
          href={`todos/${todo.id}`}
          className="text-lg block tracking-wide hover:underline cursor-pointer font-semibold capitalize text-blue-600"
          key={todo.id}
        >
          {todo.title}
        </Link>
      ))}
    </div>
  );
};

export default TodosPage;
