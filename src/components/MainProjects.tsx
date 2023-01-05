import { FC } from "react";
import { allDataType } from "../shared/types";
import { FaShoppingBasket } from "react-icons/fa";
import { requestTransaction } from "../shared/mmsk";
import { PaymentButton1 } from "../shared/payment1";
import { PaymentButton2 } from "../shared/payment2";
import { PaymentButton3 } from "../shared/payment3";



interface MainProjectsProps {
  projects: allDataType["projects"];
}

const MainProjects: FC<MainProjectsProps> = (projects) => {
  
  return (
    <>
    <h1 className="text-center text-4xl mb-10 md:mb-20">Servicios que ofrezco</h1>


    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
        HIPERTROFIA
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
        Programa de ganancia de masa muscular, implementación de técnicas de 
        entrenamiento que favorecen la hipertrofia con ejercicios analíticos 
        focalizados en musculatura concreta tanto para gente que padezca sarcopenia 
        como para atletas que busquen llevar su cuerpo al siguiente nivel.
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>

        <p data-scroll className="text-lg text-gray-200" id="story">
          Dirigido a cualquier nivel.
        </p>  
        <p data-scroll className="text-lg text-gray-200" id="story">
          1- Evaluación inicial (Valoración funcional completa + datos médicos).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
          2- Asesoría inicial (Objetivos, metodología y dudas).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
          3- Creación de una planificación, programación de microciclos y 
          adaptación de los siguientes en función de como se responda.
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
          4- Progresión (Medidas y tests cada mesociclo).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
          Reserva ya !!
        </p> 

        <div className="flex mt-[25px] gap-[20px]">
              
              <a
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px]" 
                style={{
                  border: '1px solid #ccc',
                  backgroundColor: 'transparent',
                }}
              >
                <span> 60€ / MES </span>
              </a>
              <a
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]"
                onClick={PaymentButton1()}
              >

                <span> COMPRAR </span>
                <FaShoppingBasket size={25} />
              </a>
              
            </div>
      </div>
      <img
      data-scroll
      data-scroll-speed="2"
      className="w-[450px] h-[600px] rounded-[12px]"
      src="HI.jpg"
      alt=""
      />
    </div>
    <p data-scroll className="text-lg text-gray-200" id="story">
      <br></br>
    </p>

    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      

      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
        FUERZA
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
        Programación enfocada a la mejora de la fuerza, tanto de forma 
        funcional como específica para deportes como powerlifting.
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>

        <p data-scroll className="text-lg text-gray-200" id="story">
          Dirigido a cualquier nivel.
        </p>  
        <p data-scroll className="text-lg text-gray-200" id="story">
          1- Evaluación inicial (Valoración funcional completa + datos médicos).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
          2- Asesoría inicial (Objetivos, metodología y dudas).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
          3- Creación de una planificación, programación de microciclos y 
          adaptación de los siguientes en función de como se responda.
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
          4- Progresión (Medidas y tests cada mesociclo).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
          Reserva ya !!
        </p> 

        <div className="flex mt-[25px] gap-[20px]">
              <a
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px]" 
                style={{
                  border: '1px solid #ccc',
                  backgroundColor: 'transparent',
                }}
              >
                <span> 60€ / MES </span>
              </a>
              <a
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]"
                onClick={PaymentButton2()}
              >
                <span> COMPRAR </span>
                <FaShoppingBasket size={25} />
              </a>
              
            </div>
      </div>
      <img
      data-scroll
      data-scroll-speed="2"
      className="w-[450px] h-[600px] rounded-[12px]"
      src="FUERZA.jpg"
      alt=""
      />
      
    </div>
    <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>



    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
        ADELGAZAR
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
        Programa de entrenamiento focalizado en la utilización de las 
        vías energéticas de las grasas, no solo mediante el trabajo de 
        fuerza en circuitos metabólicos si no, también, mediante trabajo 
        cardiovascular contínuo y variable.
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>

        <p data-scroll className="text-lg text-gray-200" id="story">
          Dirigido a cualquier nivel.
        </p>  
        <p data-scroll className="text-lg text-gray-200" id="story">
          1- Evaluación inicial (Valoración funcional completa + datos médicos).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
          2- Asesoría inicial (Objetivos, metodología y dudas).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
          3- Creación de una planificación, programación de microciclos y 
          adaptación de los siguientes en función de como se responda.
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
          4- Progresión (Medidas y tests cada mesociclo).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
          Reserva ya !!
        </p> 

        <div className="flex mt-[25px] gap-[20px]">
              <a
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px]" 
                style={{
                  border: '1px solid #ccc',
                  backgroundColor: 'transparent',
                }}
              >
                <span> 60€ / MES </span>
              </a>
              <a
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]"
                onClick={PaymentButton3()}
              >
                <span> COMPRAR </span>
                <FaShoppingBasket size={25} />
              </a>
              
            </div>
      </div>
      <img
      data-scroll
      data-scroll-speed="2"
      className="w-[450px] h-[600px] rounded-[12px]"
      src="ADELGAZAR.jpg"
      alt=""
      />
    </div>

    <p data-scroll className="text-lg text-gray-200" id="story">
      <br></br>
    </p>

    <div className="lg:min-h-[60vh]   flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="text-center text-3xl lg:text-4xl"
      >
        ¿Por qué entrenar conmigo?
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center my-[10px]"
      >
        Si eres alguien que no coge rutina, vas a adquirir una al cabo de unos meses
      </p>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="description text-lg text-center my-[10px]"
      >
        Los programas están diseñados específicamente para ayudarte a alcanzar tus metas de manera efectiva y eficiente!
      </p>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center my-[10px]"
      >
        Te guiaré paso a paso para asegurar que alcances tus objetivos de manera segura y sin riesgo de lesiones!
      </p>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="description text-lg text-center my-[10px]"
      >
        No te arrepentirás de invertir en ti mismo y en tu salud.
      </p>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center my-[10px]"
      >
        ¿A que esperas?
      </p>
      </div>


    </>
  );
};

export default MainProjects;
