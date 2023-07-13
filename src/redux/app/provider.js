"use client";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./store";
// import { Toaster } from "react-hot-toast";

const Providers = ({ children }) => {
  return (
    <main>
      <Provider store={store}> 
        {/* <Toaster position="top-center" reverseOrder={false} />*/}
        <section>
          <Header />
        </section>
        <section>{children}</section>
        <section>
          <Footer />
        </section>
      </Provider>
    </main>
  );
};

export default Providers;
