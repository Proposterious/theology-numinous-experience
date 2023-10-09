function Home() {
  return ( 
    <main id="home" className="h-full">
        <article id="opener" className=" w-full flex py-52 | bg-center bg-cover bg-[url('../public/church_sermon.webp')]">
          <section className='mx-auto w-full py-24 bg-gradient-to-l from-purple-500 to-pink-500'>
            <h1 className='text-6xl text-center font-semibold text-teal-300 mb-12'>
              Want or Don&apos;t Want
              <br></br>
              <span className="">a Numinous Experience?</span>
            </h1>
            <p className="font-semibold text-center text-2xl text-white">
              Follow Our Guide on How to
              <br></br>
              Avoid or Encounter the Incomprehensible Oddity.
            </p>
          </section>
        </article>

      <article id="background" className="bg-slate-200 | border-t-4 border-t-emerald-400">
        <section className="px-8 py-16 justify-evenly | border-orange-600 | flex flex-row">
          <div className='w-1/4'>
            <h1 className='-indent-2 text-4xl leading-tight font-bold text-teal-400 mb-4 w-fit mx-auto'>
              &quot;Wholly Other&quot;
            </h1>
            <p className='w-3/4 text-center text-lg text-teal-800 mx-auto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reprehenderit suscipit quo at incidunt dicta omnis aliquid quasi rem ipsam?
            </p>
          </div>
          <div className='w-1/4'>
            <h1 className='text-4xl leading-tight font-bold text-teal-400 mb-4 w-fit mx-auto'>
              &quot;Mysterium&quot;
              </h1>
            <p className='w-3/4 text-center text-lg text-teal-800 mx-auto'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad natus molestiae dicta nulla cum. Nisi dolor eveniet minus quas autem.
            </p>
          </div>
          <div className='w-1/4'>
            <h1 className='-indent-2 text-4xl leading-tight font-bold text-teal-400 mb-4 w-fit mx-auto'>
              &quot;Fascinan&quot;
              </h1>
            <p className='w-3/4 text-center text-lg text-teal-800 mx-auto'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, repudiandae fugit temporibus sit reiciendis autem distinctio. Similique totam placeat quam.
            </p>
          </div>
        </section>
      </article>

      <article id="teachings">

      </article>

      <article id="options">

      </article>
    </main>
   );
}

export default Home;