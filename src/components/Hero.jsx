"use client";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.textCard}>
          <p>
            “There’s much talk these days about legacy...How do we want to be remembered? The more [we] 
            think about it the more [we are] reminded that anything in [us] that’s worth remembering are 
            the things that Jesus has worked on, and is still working on in [us]. On [our] own [we] 
            have nothing to offer the world, but Jesus does – so ...Jesus is the only name to remember."
            #Casting Crowns
          </p>
        </div>
      </div>
     </section>
  );
}