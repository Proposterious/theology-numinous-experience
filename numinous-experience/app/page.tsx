function Home() {
  return ( 
    <main id="home" className="h-full">
        <article id="opener" className=" w-full flex py-48 | bg-center bg-cover bg-[url('../public/church_sermon.webp')]">
          <section className='mx-auto w-full py-16 bg-gradient-to-l from-purple-500 to-pink-500'>
            <h1 className='text-6xl text-center font-semibold text-teal-300 mb-12'>
              <span className="font-bold">Want</span> or <span className="font-bold">Don&apos;t Want</span>
              <br />
              to Have a Grand
              <br />
              <span className="font-bold italic">Numinous Experience?</span>
            </h1>
            <p className="font-semibold text-center text-2xl text-white">
              Follow Our Guide on How to
              <br></br>
              Avoid or Encounter the Incomprehensible Oddity.
            </p>
          </section>
        </article>

      <article id="background" className="bg-slate-200 | border-t-4 border-t-emerald-400">
        <section className="px-8 pb-12 justify-evenly | border-orange-600 | flex flex-row">
          <div id="wholly" className='w-1/3 mt-12 py-2 border-r-4 border-r-teal-400'>
            <h1 className='-indent-2 text-4xl leading-tight font-bold text-teal-400 mb-2 w-fit mx-auto'>
              &quot;Wholly Other&quot;
            </h1>
            <div className='w-3/4 text-center text-lg text-teal-900/80 mx-auto'>
              <p className="text-slate-700 border-b-4 border-b-teal-400 mb-4">Derived from Latin&apos;s <i>&quot;numen&quot;</i> and <i>&quot;omen&quot;</i> (&apos;ominous&apos;)</p>
              A variable that remains undefined by the population which cannot be taught nor understood by solely by its definition; only by its evocation and awakening may it manifest as a somewhat omnipresent, never-ending &quot;X&quot; &apos;of the spirit&apos; (<b>Rudolf O.</b>).
            </div>
          </div>
          <div id="mysterium" className='w-1/3 py-2 mt-12'>
            <h1 className='text-4xl leading-tight font-bold text-teal-400 mb-2 w-fit mx-auto'>
              &quot;Mysterium&quot;
              </h1>
            <div className='w-3/4 text-center text-lg text-teal-900/80 mx-auto'>
              <p className="text-slate-700 border-b-4 border-b-teal-400 mb-4">Derived from Latin&apos;s <i>&quot;numen&quot;</i> and <i>&quot;omen&quot;</i> (&apos;ominous&apos;)</p>
              A variable that remains undefined by the population which cannot be taught nor understood by solely by its definition; only by its evocation and awakening may it manifest as a somewhat omnipresent, never-ending &quot;X&quot; &apos;of the spirit&apos; (<b>Rudolf O.</b>).
            </div>
          </div>
          <div id="numinous" className='w-1/3 mt-12 py-2 border-l-4 border-l-teal-400'>
            <h1 className='-indent-2 text-4xl leading-tight font-bold text-teal-400 mb-2 w-fit mx-auto'>
              &quot;Numinous&quot;
              </h1>
            <div className='w-3/4 text-center text-lg text-teal-900/80 mx-auto'>
              <p className="text-slate-700 border-b-4 border-b-teal-400 mb-4">Derived from Latin&apos;s <i>&quot;numen&quot;</i> and <i>&quot;omen&quot;</i> (&apos;ominous&apos;)</p>
              Not to be confused with the rationalized concept &apos;holy&apos; of the modern world. A thing that is <i>numinous</i> is variable that remains undefined by the population which cannot be taught nor understood by solely by its definition; only by its evocation and awakening may it emerge as a somewhat omnipresent, forever lasting manifestation of the divine &apos;spirit&apos; (<b>Rudolf O.</b>)
            </div>
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