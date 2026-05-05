import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Addressals from "./pages/Addressals";
import Registration from "./pages/Registration";
import Schedule from "./pages/Schedule";
import Committees from "./pages/Committees";
import CommitteeDetail from "./pages/CommitteeDetail";
import CommitteeResourcePlaceholder from "./pages/CommitteeResourcePlaceholder";
import ConferenceDetails from "./pages/ConferenceDetails";
import PhotoGallery from "./pages/PhotoGallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ErrorBoundary>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/addressals" element={<Addressals />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/committees/:id" element={<CommitteeDetail />} />
            <Route path="/committees/:id/background-guide" element={<CommitteeResourcePlaceholder resource="background-guide" />} />
            <Route path="/committees/:id/matrix" element={<CommitteeResourcePlaceholder resource="matrix" />} />
            <Route path="/conference-details" element={<ConferenceDetails />} />
            <Route path="/gallery" element={<PhotoGallery />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
