import TodoList from "./TodosList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      {/* @ts-ignore */}
      <TodoList />
      <div className="flex-1">{children}</div>
    </main>
  );
}
