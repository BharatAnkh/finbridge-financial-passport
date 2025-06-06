
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import KycVerification from "./pages/KycVerification";
import BankLinking from "./pages/BankLinking";
import Dashboard from "./pages/Dashboard";
import FinancialPassport from "./pages/FinancialPassport";
import Analysis from "./pages/Analysis";
import InstitutionalLookup from "./pages/InstitutionalLookup";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import { AppProvider } from "./context/AppContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/kyc" element={<KycVerification />} />
            <Route path="/bank-linking" element={<BankLinking />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/passport" element={<FinancialPassport />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/institutional" element={<InstitutionalLookup />} />
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
