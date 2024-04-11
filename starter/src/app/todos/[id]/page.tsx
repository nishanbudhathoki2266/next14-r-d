import React from "react";

const TodoDetailPage = async ({ params }: { params: { id: number } }) => {
  const todo = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  ).then((res) => res.json());

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
