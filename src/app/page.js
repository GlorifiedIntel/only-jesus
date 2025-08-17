import Hero from "@/components/Hero";
import styles from "./page.module.css";
import {Button} from "flowbite-react";


export default function Home() {
  return (
    <div className={styles.mainSection}>
      <Hero />
      
    </div>
  );
}
