import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <main>
      <header className="items-center justify-center content-center flex-wrap p-1 pt-4 w-full z-10 top-0">
        <div>
          <a href="/">
            <img src="/images/MEFIRLOGO-2.png" className="w-[120px] h-auto md:w-[195px] lg:h-auto mx-auto"/>
          </a>
        </div>
      </header>
      <div className="w-full bg-[#F7931D] text-white font-light flex flex-wrap">
          <div className="w-full md:w-[43.5%] pl-0 p-4 md:text-[19px] text-[14px]">
            <div className="md:border-r-[1px] border-b-[1px] p-2 md:border-b-[0px] border-white flex items-center justify-center">
              <img src="/images/icon1.png" className="md:w-[64px] w-[54px] h-auto"/>
              <p className="">Plaza Cántaros Av. San Pablo 5844 Locales 9-10 Col. Ampliación La noría Xochimilcop 16030 CDMX</p>
            </div>
          </div>
          <div className="w-full md:w-[25%] md:py-4 pr-4 pl-2 md:text-[24px] text-[19px]">
            <div className="md:border-r-[1px] border-b-[1px] py-2 md:border-b-[0px] border-white flex items-center justify-start">
              <img src="/images/icon2.png" className="md:w-[64px] w-[54px] h-auto"/>
              <p className="pl-3">+(55) 5641 4858</p>
            </div>
          </div>
          <div className="w-full md:w-[31.5%] md:py-4 pr-4 pl-2 md:text-[24px] text-[19px]">
            <div className="py-2 flex items-center justify-start">
              <img src="/images/icon3.png" className="md:w-[64px] w-[54px] h-auto"/>
              <p className="pl-2">mefir.px@gmail.com</p>
            </div>
          </div>
      </div>
      <div className="w-full flex flex-wrap pl-11 pr-5 pt-8">
          <div className="z-10 md:w-[65%] w-full flex items-center justify-start">
              <p className="p-2 sm:text-[59.8px] text-[25px] text-[#F7931D] font-semibold">
              Restablece tu Bienestar con
                <span className="inline-flex ml-1 mt-[-15px]">
                  <img src="/images/MEFIRLOGO-5.png" className="sm:w-[195px] w-[90px] h-auto mt-1" />
                </span>               
              </p>
          </div>
          <div className="z-10 md:w-[60%] w-full flex items-center justify-start md:mt-1">
            <p className="p-2 sm:text-[30px] text-[15px] text-[#3D3D3D] ">
            Expertos en Fisioterapia y Biomagnetísmo Médico            
            </p>
          </div>
          <a href="https://api.whatsapp.com/send?phone=+527772590365&text=Hola, me gustaría cotizar mi proyecto" className="z-10 px-2 w-full flex items-center sm:justify-start justify-center md:mt-12" target="_blank">
            <button className="px-[48px] py-4 bg-[#F7931D] border-[#ffffff00] sm:text-[30px] text-[15px] text-white rounded-2xl hover:bg-[#ffffff] hover:text-[#F7931D] hover:border-[#F7931D] border-2">
            Agenda una cita            
            </button>
          </a>
          <div className="z-0 w-full flex md:items-end items-center md:justify-end justify-center md:mt-[-440px] xl:mt-[-400px]">
            <img src="/images/doctorimg.png" className="md:w-[585px] w-[400px] h-auto"/>
          </div>
          <div className="z-0 w-full flex md:items-end items-center md:justify-end justify-center md:mt-[-440px] xl:mt-[-400px]">
            <p className="sm:text-[23px] font-semibold text-[15px] text-[#000000] ">
            Certificación 1582            
            </p>
          </div>
      </div>
      <div className="w-full flex flex-wrap px-8 pb-4">
          <div className="z-10 w-full flex items-center justify-start">
              <p className="p-2 sm:text-[45px] text-[25px] text-[#F7931D] font-semibold">
              ¿Qué es Mefir?         
              </p>
          </div>
          <div className="z-10 md:w-[64.5%] w-full flex items-center justify-center md:mt-1">
            <p className="p-2 sm:text-[20px] text-[15px] text-[#3D3D3D] md:leading-[45px]">
            Mefir es un oasis de bienestar con atención integral y personalizada. Su 
            equipo altamente calificado, liderado por la Dra. Giovanna Jaimes Yescas, 
            combina técnicas innovadoras en fisioterapia y biomagnetismo para tratar el 
            origen de la dolencia, no solo los síntomas. Cuentan con instalaciones 
            modernas, tecnología de última generación y horarios flexibles. Expertos en 
            Fisioterapia y Biomagnetismo Médico te acompañará en tu camino hacia 
            una vida más saludable y plena.            
            </p>
          </div>
          <div className="z-0 pt-10 w-full flex md:items-end items-center md:justify-end justify-center md:mt-[-440px] xl:mt-[-400px]">
            <img src="/images/pacient.png" className="md:w-[382px] w-[250px] h-auto"/>
          </div>
      </div>
      <div className="bg-[#3D3D3D] w-full flex flex-wrap px-8 pb-12 pt-6">
          <div className="z-10 md:w-[64.5%] w-full flex items-center justify-center md:mt-1">
            <p className="p-2 sm:text-[30px] text-[15px] md:text-start text-center text-[#ffffff] md:leading-[45px]">
            Conoce a la Dra. Giovanna Jaimes y su equipo de 
            expertos en traumatología, comprometidos con la 
            excelencia médica y la atención personalizada.          
            </p>
          </div>
          <a href="https://api.whatsapp.com/send?phone=+527772590365&text=Hola, me gustaría cotizar mi proyecto" className="z-10 md:w-[35.5%] w-full flex items-center md:justify-end justify-center mt-5" target="_blank">
            <button className="md:px-[78px] px-[50px] md:py-[18px] py-[10px] bg-[#F7931D] border-2 border-[#f1f1f100] sm:text-[30px] text-[15px] text-white rounded-2xl hover:bg-white hover:text-[#F7931D] hover:border-[#F7931D]">
            Contáctanos           
            </button>
          </a>
      </div>
      <div className="w-full flex flex-wrap px-10 pb-12 pt-6">
          <div className=" w-full flex items-center justify-start">
              <p className="p-2 sm:text-[53px] text-[25px] text-[#000000] font-medium">
              Certificaciones         
              </p>
          </div>
          <div className="w-full flex items-start justify-start md:mt-1">
            <p className="p-2 sm:text-[30px] text-[15px] text-[#000000] md:leading-[45px] font-medium">
            Cada logro marca nuestra historia, y lo celebramos contigo         
            </p>
          </div>
          <div className="w-full bg-[#ebe8e6] items-center justify-center content-center grid grid-cols-2 sm:grid-cols-4 h-auto">
            <div className="sm:col-span-1 flex items-center justify-center p-5">
              <img src="/images/img1.png" className="sm:w-[100px] w-[60px] h-auto"/>
            </div>
            <div className="sm:col-span-1 flex items-center justify-center p-5">
              <img src="/images/img2.png" className="sm:w-[180px] w-[80px] h-auto"/>
            </div>
            <div className="sm:col-span-1 flex items-center justify-center p-5">
              <img src="/images/img3.png" className="sm:w-[200px] w-[80px] h-auto"/>
            </div>
            <div className="sm:col-span-1 flex items-center justify-center p-5">
              <img src="/images/img4.jpg" className="sm:w-[140px] w-[70px] h-auto"/>
            </div>
          </div>
      </div>
      <div className="w-full flex flex-wrap px-10 pb-12 pt-6">
          <div className=" w-full flex items-center justify-start">
              <p className="p-2 sm:text-[53px] text-[25px] text-[#000000] font-medium">
              Servicios especiales        
              </p>
          </div>
          <div className="w-full flex items-start justify-start">
            <p className="p-2 sm:text-[30px] text-[15px] text-[#000000] md:leading-[45px] font-medium">
            La mejor atención y el mejor trato, la prioridad siempre eres tú        
            </p>
          </div>
          <div className="p-12 w-full grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-center p-4 bg-white rounded-3xl shadow-2xl md:w-[400px]">
              <img src="/images/image1.jpg" alt="Terapia Física" className="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] rounded-full"/>
              <p className="ml-4 sm:text-[30px] text-[15px] font-medium">Terapia Física</p>
            </div>
            <div className="flex items-center p-4 bg-white rounded-3xl shadow-2xl md:w-[470px] md:ml-[-120px]">
              <img src="/images/image2.png" alt="Terapia Física" className="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] rounded-full"/>
              <p className="ml-4 sm:text-[30px] text-[15px] font-medium">Terapia Ocupacional</p>
            </div>
            <div className="flex items-center p-4 bg-white rounded-3xl shadow-2xl md:w-[520px]">
              <img src="/images/image3.jpg" alt="Terapia Física" className="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] rounded-full"/>
              <p className="ml-4 sm:text-[30px] text-[15px] font-medium">Vendaje Neuromuscular</p>
            </div>
            <div className="flex items-center p-4 bg-white rounded-3xl shadow-2xl md:w-[310px] md:ml-[-15px]">
              <img src="/images/image4.png" alt="Terapia Física" className="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] rounded-full"/>
              <p className="ml-4 sm:text-[30px] text-[15px] font-medium">Lesiones</p>
            </div>
            <div className="flex items-center p-4 bg-white rounded-3xl shadow-2xl">
              <img src="/images/image5.jpg" alt="Terapia Física" className="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] rounded-full"/>
              <p className="ml-4 sm:text-[30px] text-[15px] font-medium">Alteraciones de Columna</p>
            </div>
            <div className="flex items-center p-4 bg-white rounded-3xl shadow-2xl">
              <img src="/images/image6.jpg" alt="Terapia Física" className="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] rounded-full"/>
              <p className="ml-4 sm:text-[30px] text-[15px] font-medium">Plantillas ortopédicas</p>
            </div>
            <div className="flex items-center p-4 bg-white rounded-3xl shadow-2xl md:w-[430px]">
              <img src="/images/image7.jpg" alt="Terapia Física" className="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] rounded-full"/>
              <p className="ml-4 sm:text-[30px] text-[15px] font-medium">Neurodesarrollo</p>
            </div>
            <div className="flex items-center p-4 bg-white rounded-3xl shadow-2xl md:w-[450px] md:ml-[-85px]">
              <img src="/images/image8.jpg" alt="Terapia Física" className="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] rounded-full"/>
              <p className="ml-4 sm:text-[30px] text-[15px] font-medium">Parálisis Facial</p>
            </div>
          </div>
          <a href="https://api.whatsapp.com/send?phone=+527772590365&text=Hola, me gustaría cotizar mi proyecto" className="z-10 px-2 w-full flex items-center sm:justify-center justify-center md:mt-12" target="_blank">
            <button className="px-[48px] py-4 bg-[#000000] border-[#ffffff00] border-2 sm:text-[30px] text-[15px] text-white rounded-2xl hover:border-[#000000] hover:bg-white hover:text-black">
            Conoce todas las especialidades            
            </button>
          </a>
      </div>
      <div className="w-full flex flex-wrap px-10 pb-12 pt-6">
          <div className=" w-full flex items-center justify-start">
              <p className="p-2 sm:text-[53px] text-[25px] text-[#F7931D] font-medium">
              Mefir
              </p>
              <p className="p-2 sm:text-[53px] text-[25px] text-[#000000] font-medium">
              se traduce en palabras      
              </p>
          </div>
          <div className="w-full flex items-center justify-center">
          <div className='flex'>
            <Carousel
              opts={{
                align: "center",
              }}
              className="w-[70vw] h-auto"
            >
              <CarouselContent>
                <CarouselItem className="p-4">
                <div>
                      <Card>
                        <CardContent className="flex aspect-square items-start justify-center p-6">
                          <span className="flex sm:text-[22px] text-[15px] text-[#525151] text-center italic font-medium">Llevo un año de experimentar la terapia en Mefir y admito que: el personal es 
                          fabuloso,minucioso, dedicado y profesional, la Doctora muy correcta, perspicaz y 
                          comprometida con la continua consecución del equilibrio del Ser, la terapia es 
                          relajante, acertada y nos permite volvernos parte activa de nuestro proceso de 
                          sanación. Recomiendo ampliamente los servicios que MEFIR provee.¡Felicidades por su 
                          contribución a esta
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="p-4">
                <div>
                      <Card>
                        <CardContent className="flex aspect-square items-start justify-center p-6">
                          <span className="flex sm:text-[22px] text-[15px] text-[#525151] text-center italic font-medium">TEXTO 2: Llevo un año de experimentar la terapia en Mefir y admito que: el personal es 
                          abuloso,minucioso, dedicado y profesional, la Doctora muy correcta, perspicaz y 
                          comprometida con la continua consecución del equilibrio del Ser, la terapia es 
                          relajante, acertada y nos permite volvernos parte activa de nuestro proceso de 
                          sanación. Recomiendo ampliamente los servicios que MEFIR provee.¡Felicidades por su 
                          contribución a esta
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="p-4">
                <div>
                      <Card>
                        <CardContent className="flex aspect-square items-start justify-center p-6">
                          <span className="flex sm:text-[22px] text-[15px] text-[#525151] text-center italic font-medium">TEXTO 3: Llevo un año de experimentar la terapia en Mefir y admito que: el personal es 
                          fabuloso,minucioso, dedicado y profesional, la Doctora muy correcta, perspicaz y 
                          comprometida con la continua consecución del equilibrio del Ser, la terapia es 
                          relajante, acertada y nos permite volvernos parte activa de nuestro proceso de 
                          sanación. Recomiendo ampliamente los servicios que MEFIR provee.¡Felicidades por su 
                          contribución a esta
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>      
      </div>
      <div>
        <img
          className="z-0 object-cover w-[100%] md:h-[550px] h-[275px]"
          src="/images/family.png"
          
        />
        <div className="z-10 px-2 w-full flex items-center sm:justify-center justify-center md:mt-[-440px] mt-[-200px]">
          <p className="md:text-[53px] text-[25px] font-medium text-white">
          Agenda tu Consulta Hoy           
          </p>
        </div>
        <div className="z-10 px-2 w-full flex items-center sm:justify-center justify-center md:mt-[15px]">
          <p className="md:text-[30px] text-[16px] font-medium text-white">
          El Primer Paso Hacia tu Recuperación          
          </p>
        </div>
        <div className="z-10 px-2 w-full flex items-center sm:justify-center justify-center md:mt-[15px]">
          <p className="md:text-[30px] text-[16px] font-medium text-white">
          Una nueva oportunidad          
          </p>
        </div>
        <a href="https://api.whatsapp.com/send?phone=+527772590365&text=Hola, me gustaría cotizar mi proyecto" className="z-10 px-2 w-full flex items-center sm:justify-center justify-center md:mt-12" target="_blank">
            <button className="md:px-[120px] px-[40px] border-4 md:py-4 py-1 bg-[#ffffff00] sm:text-[30px] text-[15px] text-white rounded-2xl hover:bg-white hover:text-[#f7911dd5] hover:border-[#f7911d85]">
            Agendar consulta          
            </button>
        </a>
      </div>
      <footer className="items-center justify-center content-center  p-1 pt-4 w-full z-10 bottom-0 mt-[130px]">
        <div>
          <a href="/">
            <img src="/images/MEFIRLOGO-2.png" className="w-[120px] h-auto md:w-[230px] lg:h-auto mx-auto"/>
          </a>
        </div>
        <div className="z-10 px-2 py-2 w-full flex items-center sm:justify-center justify-center md:mt-[15px]">
          <p className="px-[100px] py-2 md:text-[22px] text-center text-[16px] text-[#494949] md:leading-[45px]">
          Bajo la dirección de la Dra. Giovanna Jaimes, Mefir.com se dedica a proporcionar cuidados 
          especializados y compasivos en el campo de la traumatología. Descubre cómo podemos 
          ayudarte a recuperar tu movilidad y mejorar tu calidad de vida.         
          </p>
        </div>
        <div className="flex items-center justify-center content-center mt-5">
          <div className="w-[30%] items-center justify-center content-center grid grid-cols-5 sm:grid-cols-5 h-auto">
              <a href="" className="sm:col-span-1 flex items-center justify-center" target="_blank">
                <img src="/images/tik.png" className="sm:w-[70px] w-[50px] h-auto rounded-2xl border-2 border-[#fff0] hover:scale-110"/>
              </a>
              <a href="https://api.whatsapp.com/send?phone=+527772590365&text=Hola, me gustaría cotizar mi proyecto" className="sm:col-span-1 flex items-center justify-center" target="_blank">
                <img src="/images/whats.png" className="sm:w-[70px] w-[50px] h-auto rounded-2xl border-2 border-[#fff0] hover:scale-110"/>
              </a>
              <a href="https://www.instagram.com/mefirmx/?hl=es" className="sm:col-span-1 flex items-center justify-center" target="_blank">
                <img src="/images/ins.png" className="sm:w-[70px] w-[50px] h-auto rounded-2xl border-2 border-[#fff0] hover:scale-110"/>
              </a>
              <a href="https://www.facebook.com/MEFIR.MX/" className="sm:col-span-1 flex items-center justify-center" target="_blank">
                <img src="/images/face.png" className="sm:w-[70px] w-[50px] h-auto rounded-2xl border-2 border-[#fff0] hover:scale-110"/>
              </a>
              <a href="https://www.facebook.com/messages/t/1495239643952505" className="sm:col-span-1 flex items-center justify-center" target="_blank">
                <img src="/images/mes.png" className="sm:w-[70px] w-[50px] h-auto rounded-2xl border-2 border-[#fff0] hover:scale-110"/>
              </a>
          </div>
        </div>
        <div className="z-10 px-2 py-8 w-full flex items-center sm:justify-center justify-center md:mt-[80px]">
          <a href="https://desarrollalab.com/" className="px-[100px] py-2 md:text-[15px] text-center text-[10px] text-[#494949] hover:text-[#F7931D] hover:font-medium" target="_blank">
            Página web creada por Desarrollalab.com         
          </a>
        </div>
      </footer>
    </main>
  );
}
