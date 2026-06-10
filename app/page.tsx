"use client"
import TodoList from "./components/todoList";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full items-center max-w-3xl flex-col py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl text-bold text-center mb-10">💟 TODOLIST (일정관리)</h1>

        <TodoList />

      </main>
    </div>
  );
}
