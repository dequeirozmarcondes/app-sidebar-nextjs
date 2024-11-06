import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-20 md:py-32"
      id="about"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Título Principal */}
        <h2 className="text-4xl font-bold text-center mb-8 md:text-5xl">
          Quem Somos
        </h2>

        {/* Descrição */}
        <p className="text-xl text-center mb-12 md:text-2xl md:max-w-3xl mx-auto">
          Somos uma equipe apaixonada por inovação, com o objetivo de
          transformar ideias em soluções que impactam positivamente o futuro.
          Nossa missão é criar produtos que conectem pessoas e tecnologia de
          forma inteligente e eficaz.
        </p>

        {/* Seção de Imagem e Texto */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Texto */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-6">Nossa Missão</h3>
            <p className="text-lg mb-6">
              Estamos comprometidos em proporcionar soluções inovadoras que
              atendam às necessidades específicas de cada cliente. Acreditamos
              que a tecnologia pode transformar o mundo, e nossa equipe está
              preparada para liderar essa transformação.
            </p>
            <p className="text-lg mb-6">
              Nosso time de especialistas está sempre pronto para ajudar a sua
              empresa a alcançar seus objetivos com eficiência e criatividade.
            </p>
          </div>

          {/* Imagens */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <Image
              src="/team.jpg"
              alt="Equipe"
              width={800}
              height={600}
              className="rounded-xl shadow-lg transform transition duration-500 hover:scale-105 mx-auto"
            />
            <Image
              src="/team.jpg"
              alt="Equipe"
              width={600}
              height={400}
              className="rounded-xl shadow-lg transform transition duration-500 hover:scale-105 mx-auto"
            />
          </div>
        </div>

        {/* Chamada para Ação */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-8 rounded-full shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
