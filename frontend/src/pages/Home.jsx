import React from 'react';

const Home = () => {
  return (
    <>
      {/* ====hero section==== */}
      <section className="hero__section pt-[60px] 2xl:h-[800px] bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* =====hero content===== */}
            <div className="text-center lg:text-left">
              <div className="lg:w-[570px]">
                <h1 className="text-[25px] md:text-[60px] leading-[46px] md:leading-[70px] font-[800]">
                  Sciqus Frontend Works.
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolores tempore quis dolor fugit porro neque
                  labore ducimus, distinctio, quibusdam maxime eum, doloribus sit fuga iure quisquam illum ab tempora.
                </p>
                <button className="btn bg-white text-green-800 hover:bg-green-300 transition duration-300">Register</button>
              </div>
            </div>
            {/* ==== hero counter ==== */}
            <div className="flex justify-end">
              <div>
                {/* <img className="w-64 md:w-80" src={logo} alt="Logo" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
