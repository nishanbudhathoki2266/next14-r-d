import Example from "@/app/components/Example";
import { notFound } from "next/navigation";
import React from "react";

function getTodo(id: string) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
    (response) => response.json()
  );
}

const TodoDetailPage = async ({ params }: { params: { id: string } }) => {
  const todo = await getTodo(params.id);

  if (!Object.keys(todo).length) return notFound();

  return (
    <div>
      {todo.title}
      <Example />
    </div>
  );
};

export default TodoDetailPage;
