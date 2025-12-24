import Navbar from './components/Navbar'; // Import the component

function App() {
  return (
    <div>
      <Navbar /> {/* Use the component here */}
      <main className="p-8">
        <h2 className="text-2xl font-bold">Welcome to my Portfolio</h2>
      </main>
    </div>
  );
}

export default App;