import React from 'react';
import CV from '../assets/CV.pdf'

const Presentation = () => {
  return (
    <div className='flex flex-col justify-center items-center  z-50 '>
       <h1 className="max-w-sm relative text-center text-4xl mt-20 before:content-[''] before:absolute before:-bottom-5 before:bg-black before:w-[100px] before:left-[30%] before:h-[1px]">Presentation</h1> 
       <p className='  max-w-md text-xl p-10 leading-8  text-justify text-center  '>En tant que <strong>développeur web</strong> depuis plus de 3 ans, je suis passionné par la création de sites web et d'application mobile. J'ai acquis une connaissance dans différents languages de programmation, ainsi que dans l'utilisation de frameworks populaires tels que ViteJs et NextJs.
j'ai travaillé sur une variété de projets, allant des sites web à la <strong>gestion de base de données.</strong><br/>
Je conçois et réalise des sites web et <strong>application web mobile.</strong><br/>
N'hésitez pas à voir mon CV au format pdf: <a className=' p-1.5 bg-black  text-white  hover:text-gray-500 rounded-md' href={CV} download>Mon CV</a>

 </p>
 </div>
  )
}

export default Presentation