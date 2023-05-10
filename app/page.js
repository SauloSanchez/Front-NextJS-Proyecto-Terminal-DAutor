import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="z-10 w-full h-full flex-col items-center justify-between p-3 sm:p-24">
        <div className="flex h-40 w-full items-top justify-end">
          <a
            className="pointer-events-none flex items-center justify-center"
            href="https://www.unicaribe.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logos.webp"
              alt="Universidad del Caribe"
              width={200}
              height={200}
              priority
            />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-center text-black px-6 md:px-12">
            <h2 className="text-5xl font-bold tracking-tight leading-tight mb-12">
              MATHI-AS <br />
              <small>Tutor virtual</small>
            </h2>
            <Link href="https://mathias-tutor-virtual.vercel.app/">
              <button
                type="button"
                className="inline-block px-7 py-3 border-2 border-gray-700 text-gray-700 text-sm font-semibold leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Ir a la aplicación
              </button>
            </Link>
          </div>
        </div>

        <div className="flex h-16 w-full items-top justify-center mt-10">
          <span className="text-lg font-bold mb-2 text-gray-500">
            Desarrolladores
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 xl:gap-x-12">
          <div className="mb-6 lg:mb-0">
            <div className="relative block rounded-lg shadow-lg bg-white p-6">
              <div className="lg:flex flex-row items-center">
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-[50%] xl:w-5/12 lg:pr-2">
                  <Image
                    src="/sj.png"
                    width={200}
                    height={200}
                    alt="Trendy Pants and Shoes"
                    className="w-full rounded-md mb-6 lg:mb-0"
                  />
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                  <h5 className="text-sm lg:text-lg font-bold mb-2">
                    Saulo Sanchez Dzul
                  </h5>
                  <p className="text-gray-500 mb-4">
                    Ing. Datos e Inteligencia Organizacional
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0">
            <div className="relative block rounded-lg shadow-lg bg-white p-6">
              <div className="lg:flex flex-row items-center">
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-[50%] xl:w-5/12 lg:pr-2">
                  <Image
                    src="/nv.png"
                    width={200}
                    height={200}
                    alt="Trendy Pants and Shoes"
                    className="w-full rounded-md mb-6 lg:mb-0"
                  />
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                  <h5 className="text-sm lg:text-lg font-bold mb-2">
                    Noe Vazquez Pompa
                  </h5>
                  <p className="text-gray-500 mb-4">
                    Ing. Datos e Inteligencia Organizacional
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0">
            <div className="relative block rounded-lg shadow-lg bg-white p-6">
              <div className="lg:flex flex-row items-center">
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-[50%] xl:w-5/12 lg:pr-2">
                  <Image
                    src="/jm.png"
                    width={200}
                    height={200}
                    alt="Trendy Pants and Shoes"
                    className="w-full rounded-md mb-6 lg:mb-0"
                  />
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                  <h5 className="text-sm lg:text-lg font-bold mb-2">
                    Joan Mendez Pool
                  </h5>
                  <p className="text-gray-500 mb-4">
                    Ing. Datos e Inteligencia Organizacional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-16 w-full items-top justify-center mt-10">
          <span className="text-lg font-bold mb-2 text-gray-500">Asesor</span>
        </div>

        <div className="flex w-full items-center justify-center">
          <div className="mb-6 lg:mb-0">
            <div className="relative block rounded-lg shadow-lg bg-white p-6">
              <div className="lg:flex flex-row items-center">
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-[50%] xl:w-5/12 lg:pr-2">
                  <Image
                    src="/lg.webp"
                    width={100}
                    height={100}
                    alt="Trendy Pants and Shoes"
                    className="w-full rounded-md mb-6 lg:mb-0"
                  />
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                  <h5 className="text-sm lg:text-lg font-bold mb-2">
                    Dr. Hector Fernando Gomez Garcia
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-32 text-gray-800 mt-10">
          <div className="block rounded-lg shadow-lg bg-white">
            <div className="flex flex-wrap items-center justify-center">
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="text-2xl font-bold">Derechos de autor</h2>
                  <p className="uppercase text-gray-400 mb-6 flex items-center">
                    Proyecto Terminal
                  </p>
                  <p className="text-gray-500 mb-6 text-justify">
                    El proyecto MATH-IAS, un tutor virtual diseñado para los
                    estudiantes de matemáticas de la Universidad del Caribe, es
                    producto del esfuerzo colaborativo de un grupo de
                    estudiantes y un asesor.
                  </p>
                  <p className="text-gray-500 text-justify">
                    Si se desea hacer uso de el desarrollo de la aplicacion, es
                    necesario obtener la autorización explícita de los autores
                    del mismo. Puedes solicitar este permiso contactándote con
                    Saulo Jesus Sanchez Dzul, Noe Vazquez Pompa, Joan Mendez
                    Pool o el Dr. Hector Fernando Gomez Garcia. Si se concede
                    dicha autorización, se debe reconocer de manera adecuada a
                    los autores y citar la fuente de la información. En caso de
                    que esta investigación dé lugar a otros productos, como
                    artículos científicos o de divulgación, el asesor está
                    obligado a informar a los egresados y acordar por escrito el
                    grado de su participación.
                  </p>
                  <br />
                  <p className="text-gray-500 text-justify">
                    El informe técnico pertenece a la Universidad del Caribe y
                    se encuentra disponible para su consulta en la Biblioteca
                    para fines académicos y de investigación. Además, la
                    Universidad está comprometida a garantizar su preservación a
                    largo plazo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
