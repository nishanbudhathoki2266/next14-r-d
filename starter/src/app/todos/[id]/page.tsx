import { error } from "console";
import { notFound } from "next/navigation";
import React from "react";

const wait = (duration: number) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

const getTodos = async (id: number) => {
  await wait(5000);
  return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
    (res) => res.json()
  );
};

const TodoDetailPage = async ({ params }: { params: { id: number } }) => {
  const todo = await getTodos(params.id);

  if (!todo.title) return notFound();

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <h3 className="text-4xl font-extrabold">{todo.title}</h3>
      <p className="text-lg font-medium">
        The todo is {todo.completed ? "completed." : "not completed yet."}
      </p>
    </div>
  );
};

export default TodoDetailPage;
