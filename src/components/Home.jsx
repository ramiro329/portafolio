import { Footer } from "./Footer"
import { Header } from "./Header"
import { Main } from "./Main"

 const Home = () => {
    
    const nombre = "Enzo Ramiro Robles"
    const titulo = "Tecnico Universitario en programacion"
    const secundaria = "Liceo Remedio de Escalado de San Martin."
    const sobre_mi = "Actualmente estudio en la UTN una tecnicatura en programacion."
    const tecnologiasYhabilidades = ["Java: Resolución de ejercicios de lógica, programación orientada a objetos (POO), desarrollo de aplicaciones simples con estructura modular.",
        "Python: Manejo de POO, integración con bases de datos, consumo de APIs REST y almacenamiento de datos en bases de datos.",
        "HTML y CSS: Maquetado de páginas web, uso de etiquetas semánticas y estilos básicos.",
        "SQL Server y MySql: Diseño de estructuras relacionales, creación de tablas, consultas SQL básicas, conexión e interacción desde aplicaciones en Python."]
    const otros = "Celular: 3815550000"
    return (

        <>
         <div className="text-center">
        <Header nombre = {nombre} />
        <Main titulo={titulo} secundaria={secundaria} Algo_de_mi={sobre_mi} Tecnologia_y_Habilidades ={tecnologiasYhabilidades} />
        <Footer otros={otros} />
        </div>
        </>
    )

   
}
 export default Home

