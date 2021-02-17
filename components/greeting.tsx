import styles from "../styles/Greeting.module.css";

export type Props = {
  name: string;
};

export default function Greeting(props: Props) {
  return (
    <p className={styles.hello}>
      Hallo, <span className={styles.name}>{props.name}</span>
    </p>
  );
}
