import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800
    to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
            I am a meticulous and detail-oriented developer who places a strong emphasis on writing clean, 
            elegant, and efficient code. With a passion for web development, I constantly seek out challenging opportunities 
            that push my boundaries and allow me to grow both personally and professionally.
            <br/>
            When approaching projects, I bring a high level of dedication and commitment to deliver exceptional results. 
            I thrive on surpassing performance benchmarks and meeting targets within set timeframes, while maintaining a 
            focus on quality and accuracy.
            <br/>
            I am eager to continue my journey in the field of web development, as it provides a constant opportunity for learning 
            and improvement. I am driven by the desire to enhance my skills and knowledge, staying up-to-date with the latest 
            industry trends and technologies. By embracing new challenges and learning experiences, I aim to continually evolve 
            as a developer and contribute my best work to the web development community.
            </p>
            <br/>
        </div>
    </div>
  )
}

export default About
