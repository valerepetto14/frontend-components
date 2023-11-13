import styles from "./style.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = () => {
  return (
    <div className={styles.fondo}>
      <input type="text" placeholder="Buscar" className={styles.input} />
      <AiOutlineSearch
        style={{
          fontSize: "30px",
        }}
      />
    </div>
  );
};

export default SearchInput;
