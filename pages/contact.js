import { useForm, ValidationError } from '@formspree/react';
import Navigation from '../components/Navigation'
import Image from 'next/image'

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
        <main className="bg-black">
            <div className="h-fit w-full relative">
                <Image src="/images/contact-page-cropped.jpg" width={3200} height={1800}/>
                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="md:text-6xl text-4xl md:tracking-widest tracking-wide mt-10 md:m-0 text-white">CONTACT</h1>
                </div>
                <Navigation/>
            </div>



            <div className="text-center shadow-2xl p-10 rounded-xl  mx-auto lg:max-w-screen-lg text-white grow">
              <h2 className="text-3xl font-bold mb-5">Contact Me</h2>
              <p className="mb-5">Feel free to leave me a message about anything!</p>
              <form onSubmit={handleSubmit} name="contact-form">
                <div className="form-group mb-6">
                  <label for="full-name" className="float-left">Name</label>
                  <input id="full-name" name="name" type="text" className="md:h-16 form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-900 dark:border-slate-700 text-black"  />
                </div>
                <div className="form-group mb-6">
                  <label htmlFor="email" className="float-left">Email</label>
                  <input id="email" type="email" name="email" className="md:h-16 form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-900 dark:border-slate-700 text-black" />
                  <ValidationError prefix="Email" field="email" errors={state.errors}/>
                </div>
                <div className="form-group mb-6">
                  <label  className="float-left">Message</label>
                  <textarea id="message" name="message" className="form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-900 dark:border-slate-700 text-black " rows="10"></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors}/>
                </div>
                <button type="submit" onClick={handleClick} disabled={state.submitting} className="w-full px-6 py-2.5 border dark:border-slate-700 dark:text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-black hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-700 active:shadow-lg transition duration-150 ease-in-out">
                  Send
                </button>
              </form>
            </div>
        </main>
    )
}
export default Contact