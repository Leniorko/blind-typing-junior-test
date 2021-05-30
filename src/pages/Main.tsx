import OptionsComponent from "../components/Options";
import TextDisplayComponent from "../components/TextDisplay";
import TextInputComponent from "../components/TextInput";
import style from "./Main.module.css";

/**
 * This is MainPage. Ususally I dividing app into pages when I'm using Router.
 * But now it is made that way just because I get used to this.
 */
export default function MainPage() {
  return (
    <div className={style.mainPage}>
      <div className={style.mainPage__textArea}>
        <TextInputComponent />
        <TextDisplayComponent />
      </div>
      <div className={style.mainPage__optionsArea}>
        <OptionsComponent />
      </div>
    </div>
  );
}
