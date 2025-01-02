import React from 'react'
import {useState} from "react"
const Projects = () => {
     const [toggleView , setToggleView] = useState(true)



  return (
    <div className={toggleView ? "all-projects-container " : " darkBody"}>
      <h1 className={!toggleView && "lightH1"}>Hello my name is Suad Pllana , passionate Front-end Developer</h1>
      <h2 className={!toggleView && "lightH1"}>Here are all my projects </h2>
      <button className={toggleView ? "blackButton" : ""} onClick={() => setToggleView((prev) => !prev)}>{toggleView ? "Dark Mode" : "Light Mode"}</button>
        <div className="container" id={!toggleView ? "darkContainer" : ""}>

           <a target="_blank" href="https://suadpllana.github.io/ai-image-generator/">
            <div>
                 <h2>AI Image Generator </h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/books">
            <div>
                 <h2>Books</h2>
            </div>
            </a>


            <a target="_blank" href="https://suadpllana.github.io/bmi">
            <div>
                 <h2>BMI Calculator</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/calculator">
            <div>
                 <h2>Calculator</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/calendar/">
            <div>
                 <h2>Calendar</h2>
            </div>
            </a>


            <a target="_blank" href="https://suadpllana.github.io/charity/">
            <div>
                 <h2>Charity</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/cinema/">
            <div>
                 <h2>Cinema</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/coffee/">
            <div>
                 <h2>Coffee</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/color-picker/">
            <div>
                 <h2>Color Picker</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/crypto-prices/">
            <div>
                 <h2>Crypto Prices</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/currency-converter/">
            <div>
                 <h2>Currency Converter </h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/decimal-to-binary/">
            <div>
                 <h2>Decimal to binary converter</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/dictionary/">
            <div>
                 <h2>Dictionary</h2>
            </div>
            </a>
            <a target="_blank" href="https://suadpllana.github.io/digital-clock/">
            <div>
                 <h2>Digital Clock</h2>
            </div>
            </a>


            <a target="_blank" href="https://suadpllana.github.io/dogs/">
            <div>
                 <h2>Dogs</h2>
            </div>
            </a>


            <a target="_blank" href="https://suadpllana.github.io/drums/">
            <div>
                 <h2>Drums </h2>
            </div>
            </a>


          

            <a target="_blank" href="https://suadpllana.github.io/euro2024/">
            <div>
                 <h2>Euro 2024</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/expense-tracker/">
            <div>
                 <h2>Expense Tracker</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/free-games/">
            <div>
                 <h2>Free Games</h2>
            </div>
            </a>


            <a target="_blank" href="https://suadpllana.github.io/header/">
            <div>
                 <h2>Header</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/holidays/">
            <div>
                 <h2>Holidays</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/image-gallery/">
            <div>
                 <h2>Image Gallery</h2>
            </div>
            </a>

            
            <a target="_blank" href="https://suadpllana.github.io/jokes/">
            <div>
                 <h2>Jokes</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/logo-generator/">
            <div>
                 <h2>Logo</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/music/">
            <div>
                 <h2>Music</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/naruto/">
            <div>
                 <h2>Naruto </h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/nasa/">
            <div>
                 <h2>Nasa</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/news/">
            <div>
                 <h2>News</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/notes/">
            <div>
                 <h2>Notes</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/piano/">
            <div>
                 <h2>Piano </h2>
            </div>
            </a>

            
            <a target="_blank" href="https://suadpllana.github.io/pokemon/">
            <div>
                 <h2>Pokemon</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/quiz/">
            <div>
                 <h2>Quiz</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/qr-code-generator/">
            <div>
                 <h2>QR code Generator</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/quotes/">
            <div>
                 <h2>Quotes </h2>
            </div>
            </a>

           



            <a target="_blank" href="https://suadpllana.github.io/quran/">
            <div>
                 <h2>Quran</h2>
            </div>
            </a>


            <a target="_blank" href="https://suadpllana.github.io/random-password-generator/">
            <div>
                 <h2>Random Password Generator</h2>
            </div>
            </a>

            
            <a target="_blank" href="https://suadpllana.github.io/restaurant/dashboard/dashboard.html">
            <div>
                 <h2>Restaurant</h2>
            </div>
            </a>
          
          
            <a target="_blank" href="https://suadpllana.github.io/rockPaperScissors/">
            <div>
                 <h2>Rock Paper Scissors</h2>
            </div>
            </a>
                    
           

            <a target="_blank" href="https://suadpllana.github.io/stopwatch/">
            <div>
                 <h2>Stopwatch</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/text-to-voice-converter/">
            <div>
                 <h2>Text to Voice Converter </h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/to-do-list/">
            <div>
                 <h2>To do list</h2>
            </div>
            </a>

            <a target="_blank" href="https://suadpllana.github.io/translate/">
            <div>
                 <h2>Translation </h2>
            </div>
            </a>

            
            

         

            <a target="_blank" href="https://suadpllana.github.io/university/">
            <div>
                 <h2>University</h2>
            </div>
            </a>
             
        <a target="_blank" href="https://suadpllana.github.io/weather-app/">
            <div>
                 <h2>Weather </h2>
            </div>
            </a>

           
         
          
        </div>
    </div>
  )
}

export default Projects
