import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";

const Index = lazy(() => import("./pages/Index"));
const Addressals = lazy(() => import("./pages/Addressals"));
const Registration = lazy(() => import("./pages/Registration"));
const RegistrationDownloads = lazy(() => import("./pages/registration/RegistrationDownloads"));
const RegistrationKameraObscura = lazy(() => import("./pages/registration/RegistrationKameraObscura"));
const Schedule = lazy(() => import("./pages/Schedule"));
const Committees = lazy(() => import("./pages/Committees"));
const CommitteeDetail = lazy(() => import("./pages/CommitteeDetail"));
const ConferenceDetails = lazy(() => import("./pages/ConferenceDetails"));
const PhotoGallery = lazy(() => import("./pages/PhotoGallery"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="font-display text-primary text-xl animate-pulse">Loading…</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ErrorBoundary>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/addressals" element={<Addressals />} />
              <Route path="/registration" element={<Registration />}>
                <Route index element={<RegistrationDownloads />} />
                <Route path="kamera-obscura" element={<RegistrationKameraObscura />} />
              </Route>
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/committees" element={<Committees />} />
              <Route path="/committees/:id" element={<CommitteeDetail />} />
              <Route path="/conference-details" element={<ConferenceDetails />} />
              <Route path="/gallery" element={<PhotoGallery />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
