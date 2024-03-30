import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "./globals.css";

export default function App({ children }) {
  return (
    <ChakraProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Nav />
        <main className="flex-grow container mx-auto px-4">{children}</main>
        <Footer />
      </div>
    </ChakraProvider>
  );
}
