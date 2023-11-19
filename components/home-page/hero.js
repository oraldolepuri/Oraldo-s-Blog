import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
    return(
        <section className={classes.hero} >
          <div className={classes.image} >
            <Image src="/images/site/oraldo.png" alt="An image that shows Oraldo" width={300} height={300} />
          </div>
          <h1>Hi, I am Oraldo</h1>
          <p>
            I blog about web development - especially frontend frameworks like React.
          </p>
        </section>
    );
}
export default Hero;