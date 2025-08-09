import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  ShoppingBag, 
  Euro,
  BarChart3,
  ClipboardList,
  Settings
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface BusinessDashboardProps {
  comercial: any;
  onLogout: () => void;
}

interface KPIData {
  totalClientes: number;
  pedidosDelMes: number;
  ventasDelMes: number;
}

interface Cliente {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  activo: boolean;
}

export const BusinessDashboard = ({ comercial, onLogout }: BusinessDashboardProps) => {
  const [kpis, setKpis] = useState<KPIData>({ totalClientes: 0, pedidosDelMes: 0, ventasDelMes: 0 });
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, [comercial.id]);

  const loadDashboardData = async () => {
    setIsLoading(true);
    
    try {
      // Cargar clientes
      const { data: clientesData } = await supabase
        .from("clientes")
        .select("*")
        .eq("comercial_id", comercial.id)
        .eq("activo", true);

      setClientes(clientesData || []);

      // Calcular pedidos del mes actual
      const currentMonth = new Date().toISOString().slice(0, 7);
      const { data: pedidosData } = await supabase
        .from("pedidos")
        .select(`*, clientes!inner(comercial_id)`)
        .eq("clientes.comercial_id", comercial.id)
        .gte("fecha_pedido", `${currentMonth}-01`)
        .lt("fecha_pedido", `${currentMonth}-32`);

      const pedidosDelMes = pedidosData?.length || 0;
      const ventasDelMes = pedidosData?.reduce((sum, pedido) => sum + Number(pedido.total), 0) || 0;

      setKpis({
        totalClientes: clientesData?.length || 0,
        pedidosDelMes,
        ventasDelMes
      });

      // Datos para gráficos
      const chartData = [
        { name: 'Ene', pedidos: Math.floor(Math.random() * 20) + 5, ventas: Math.floor(Math.random() * 5000) + 2000 },
        { name: 'Feb', pedidos: Math.floor(Math.random() * 20) + 5, ventas: Math.floor(Math.random() * 5000) + 2000 },
        { name: 'Mar', pedidos: pedidosDelMes, ventas: ventasDelMes },
      ];
      setChartData(chartData);

    } catch (error) {
      console.error("Error loading dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const kpiCards = [
    {
      title: "Total Clientes",
      value: kpis.totalClientes,
      icon: Users,
      color: "text-secondary",
      bgColor: "bg-gradient-accent"
    },
    {
      title: "Pedidos del Mes",
      value: kpis.pedidosDelMes,
      icon: ShoppingBag,
      color: "text-primary",
      bgColor: "bg-gradient-primary"
    },
    {
      title: "Ventas del Mes",
      value: `€${kpis.ventasDelMes.toFixed(2)}`,
      icon: Euro,
      color: "text-secondary",
      bgColor: "bg-gradient-accent"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-card shadow-card p-6"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              BARPLAS Dashboard
            </h1>
            <p className="text-muted-foreground">Bienvenido, {comercial.nombre}</p>
          </div>
          <Button onClick={onLogout} variant="outline">
            Cerrar Sesión
          </Button>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto p-6">
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {kpiCards.map((kpi, index) => (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {kpi.title}
                      </p>
                      <motion.p 
                        className={`text-3xl font-bold ${kpi.color}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                      >
                        {kpi.value}
                      </motion.p>
                    </div>
                    <div className={`p-3 rounded-full ${kpi.bgColor}`}>
                      <kpi.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts and Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Evolución de Ventas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="ventas" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Acciones Rápidas</CardTitle>
                <CardDescription>Gestiona tu negocio de forma eficiente</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <ClipboardList className="h-4 w-4 mr-2" />
                  Ver Todos los Pedidos
                </Button>
                <Button variant="outline" className="w-full">
                  <Settings className="h-4 w-4 mr-2" />
                  Gestionar Catálogos
                </Button>
                <Button variant="outline" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Portal de Clientes
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Clients List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Mis Clientes ({clientes.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {clientes.map((cliente, index) => (
                  <motion.div
                    key={cliente.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="p-4 border border-border rounded-lg hover:shadow-card transition-shadow duration-300"
                  >
                    <h4 className="font-semibold text-foreground">{cliente.nombre}</h4>
                    <p className="text-sm text-muted-foreground">{cliente.email}</p>
                    <p className="text-sm text-muted-foreground">{cliente.telefono}</p>
                    <Button 
                      size="sm" 
                      className="mt-2 bg-gradient-accent hover:shadow-glow transition-all duration-300"
                    >
                      Ver Catálogo
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};