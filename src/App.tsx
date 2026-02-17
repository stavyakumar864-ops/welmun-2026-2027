import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Addressals from "./pages/Addressals";
import Registration from "./pages/Registration";
import RegistrationOverview from "./pages/registration/RegistrationOverview";
import RegistrationEligibility from "./pages/registration/RegistrationEligibility";
import RegistrationProcess from "./pages/registration/RegistrationProcess";
import RegistrationFees from "./pages/registration/RegistrationFees";
import RegistrationHotels from "./pages/registration/RegistrationHotels";
import RegistrationDownloads from "./pages/registration/RegistrationDownloads";
import RegistrationFAQs from "./pages/registration/RegistrationFAQs";
import RegistrationKameraObscura from "./pages/registration/RegistrationKameraObscura";
import Schedule from "./pages/Schedule";
import Committees from "./pages/Committees";
import CommitteeDetail from "./pages/CommitteeDetail";
import ConferenceDetails from "./pages/ConferenceDetails";
import ImportantDownloads from "./pages/ImportantDownloads";
import PhotoGallery from "./pages/PhotoGallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/addressals" element={<Addressals />} />
          <Route path="/registration" element={<Registration />}>
            <Route index element={<RegistrationOverview />} />
            <Route path="eligibility" element={<RegistrationEligibility />} />
            <Route path="process" element={<RegistrationProcess />} />
            <Route path="fees" element={<RegistrationFees />} />
            <Route path="hotels" element={<RegistrationHotels />} />
            <Route path="downloads" element={<RegistrationDownloads />} />
            <Route path="kamera-obscura" element={<RegistrationKameraObscura />} />
            <Route path="faqs" element={<RegistrationFAQs />} />
          </Route>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/committees/:id" element={<CommitteeDetail />} />
          <Route path="/conference-details" element={<ConferenceDetails />} />
          <Route path="/downloads" element={<ImportantDownloads />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
