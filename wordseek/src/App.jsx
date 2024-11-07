import { Fragment } from "react";
import "./App.css"
import NavigationBar from "./Nav";
import Footer from "./Footer";


const App = () => {

  return <Fragment>
      <section className="min-h-screen bg-slate-50 flex text-left
     text-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <div className="flex flex-col ">
          <h2 className="text-7xl mb-12 text-center">WordSeek</h2>
          <p className="mt-16">
            WordSeek is vocabulary learning application designed with the purpose of expanding your lexicon. Along with its practical, user-friendly interface, WordSeek offers its users a large and complex library of words that will be consistantly updated for the remainder of its application life cycle. <br /><br /> Although this application was initially designed for student users, at its core, WordSeek is designed to offer a personalized learning experience for all users. <br /> <br />For retention and understanding, WordSeek offers the Quotable. The Quotable is a feature designed to offer personalization and growth insights during users' vocabulary-learning journey. <br /> <br />This is the "Quick Start" page, so to get started, use the download link below.
            For other information, please use the website's navigation tray. I hope you enjoy!
            <br />
          </p>
          <a className=" mt-20 text-center hover:text-zinc-500" href="">Download Here</a>
        </div>
      </section>
      <Footer/>
  </Fragment>;
};

export default App