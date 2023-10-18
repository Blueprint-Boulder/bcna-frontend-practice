// import .....

function App() {
  return (
    <div className="bg-sky-100 w-screen h-screen">
      <section className="flex flex-col items-center pt-4">
        <h2 className="text-3xl font-bold">INTRODUCTION</h2>
        <p className="text-xl m-4">Luffy is hungry and needs food ASAP! Build a counter to give Luffy pieces of meat or else we're all doomed.</p>
        <img src="/luffy.jpeg" className="w-72 mb-16" alt="Luffy with a hungry expression"/>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-center">COUNTER</h2>
      </section>
    </div>
  );
}

export default App;
