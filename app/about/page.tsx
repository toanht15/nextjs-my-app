"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import styles from "../../styles/about.module.css";

export default function About() {
    const router = useRouter();
    console.log(usePathname());
    return (
        <main>
            <h1>About Page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat quae libero rem dolorum cumque veritatis obcaecati,
                adipisci error! Neque totam aut autem libero consequuntur harum
                nam expedita eius voluptatum ullam.
            </p>
            <button
                className={styles.btn}
                onClick={() => router.push("/dashboard")}
            >
                Back to Dashboard
            </button>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti ratione a voluptas molestiae veritatis odio accusamus
                corporis reiciendis exercitationem doloremque!
            </p>
        </main>
    );
}
