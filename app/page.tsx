import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.title}>Homepage</div>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat quae libero rem dolorum cumque veritatis obcaecati,
                adipisci error! Neque totam aut autem libero consequuntur harum
                nam expedita eius voluptatum ullam.
            </p>
            <p className={styles.text}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti ratione a voluptas molestiae veritatis odio accusamus
                corporis reiciendis exercitationem doloremque!
            </p>
        </main>
    );
}
