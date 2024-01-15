import { styles } from '../styles';
import computer from '../assets/computer.png';

const Hero = () => {
  return (
    <section className="w-full mx-auto pt-[120px]">
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Dang</span></h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            I am a <span className="text-[#915eff]">Software Developer</span> having a <br className="sm:block hidden" /> passion for web design and love <br className="sm:block hidden" /> to create for web applications.
          </p>
        </div>
      </div>

      <div>
        <img 
          className="w-full max-w-[700px] 2xl:max-w-[1000px] sm:mt-[-100px] mx-auto object-contain" 
          src={computer} 
          alt="computer" />
      </div>
    </section>
  )
}

export default Hero