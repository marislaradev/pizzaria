function Container({ children }) {
  return (
    <section className="w-full min-h-screen bg-yellow-500 flex flex-col items-center py-12 gap-y-4">
      {children}
    </section>
  );
}

export default Container;
