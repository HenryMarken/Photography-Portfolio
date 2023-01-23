import {Navbar} from 'flowbite-react'
import Link from 'next/link'
import {Progress} from "flowbite-react"
import {Alert} from "flowbite-react"
import { useForm, ValidationError } from '@formspree/react';

function Contact () {
    const [state, handleSubmit] = useForm("mzbqzwdy"); 
    const handleClick = () => {
        setTimeout(() => {
          const frm = document.getElementsByName("contact-form")[0];
          alert("Thank you! I will get back to you as soon as I can.");
          frm.reset();
        }, 100);
      };
    return (
        <main>
            <div className="h-fit w-full relative">
                <img src="/images/contact-page-cropped.jpg"/>
                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-6xl tracking-widest font-medium">CONTACT</h1>
                </div>
                <Navbar fluid={true} className="w-full rounded-none absolute bg-opacity-0 top-0 mt-5">
                <Navbar.Brand >
                    <img  src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                    <span className="self-center whitespace-nowrap text-xl text-white"> Henry Marken </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Link href="/" className="md:text-2xl text-white hover:text- font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-150"> Home </Link>
                    <Link href="/gallery" className="md:text-2xl text-white hover:text- font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-150"> Gallery </Link>
                    <Link href="/photoshoots" className="md:text-2xl text-white font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-150"> Photoshoots </Link>
                    <Link href="/about" className="md:text-2xl text-white font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-150"> About </Link>
                    <Link href="/contact" className="md:text-2xl text-white underline font-extralight font-roboto"> Contact </Link>
                </Navbar.Collapse>
                </Navbar>
            </div>



            <div className="text-center shadow-2xl p-10 rounded-xl my-10 mx-auto lg:max-w-screen-lg dark:text-white grow">
              <h2 className="text-3xl font-bold mb-5">Contact Me</h2>
              <p className="mb-5">Feel free to leave me a message about anything!</p>
              <form onSubmit={handleSubmit} name="contact-form">
                <div className="form-group mb-6">
                  <label for="full-name" className="float-left">Name</label>
                  <input id="full-name" name="name" type="text" className="md:h-16 form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-900 dark:border-slate-700"  />
                </div>
                <div className="form-group mb-6">
                  <label htmlFor="email" className="float-left">Email</label>
                  <input id="email" type="email" name="email" className="md:h-16 form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-900 dark:border-slate-700" />
                  <ValidationError prefix="Email" field="email" errors={state.errors}/>
                </div>
                <div className="form-group mb-6">
                  <label  className="float-left">Message</label>
                  <textarea id="message" name="message" className="form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-900 dark:border-slate-700 " rows="10"></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors}/>
                </div>
                <button type="submit" onClick={handleClick} disabled={state.submitting} className="w-full px-6 py-2.5 border dark:border-slate-700 dark:text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  Send
                </button>
              </form>
            </div>
        </main>
    )
}
export default Contact