import AuthProvider from "./auth/context/AuthProvider"
import AppRouter from "./router/AppRouter"


AuthProvider


function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
