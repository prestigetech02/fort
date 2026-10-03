import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '@/components/layout/ScrollToTop';
import HomePage from '@/pages/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
