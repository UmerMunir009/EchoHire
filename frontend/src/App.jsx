import ThemeToggle from "./components/ThemeToggle"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header>
        <div className="max-w-6xl mx-auto px-3 py-4 flex items-center justify-between">
          <div className="flex justify-start items-center gap-2">
            <img className="w-10" src="/favicon.png" alt="" />
            <h1 className="text-xl font-bold">EchoHire</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div>Hlw</div>
    </div>
  )
}

export default App
