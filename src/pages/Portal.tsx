import { useState, useEffect } from "react";
import { LoginForm } from "@/components/LoginForm";
import { BusinessDashboard } from "@/components/BusinessDashboard";

const Portal = () => {
  const [comercial, setComercial] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay una sesión activa guardada
    const savedComercial = localStorage.getItem("barplas-comercial");
    if (savedComercial) {
      setComercial(JSON.parse(savedComercial));
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (comercialData: any) => {
    setComercial(comercialData);
    localStorage.setItem("barplas-comercial", JSON.stringify(comercialData));
  };

  const handleLogout = () => {
    setComercial(null);
    localStorage.removeItem("barplas-comercial");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!comercial) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return <BusinessDashboard comercial={comercial} onLogout={handleLogout} />;
};

export default Portal;