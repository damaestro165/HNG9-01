import React from "react";
import Button from "../Button/Button";
import "./Main.scss";
import SlackIcon from "../../assets/slack.png";
import GitHubIcon from "../../assets/github.png";

function Main() {
  return (
    <main>
      <section className="buttons-container">
        <Button link="" text="Twitter Link" id="" />
        <Button
          link="https://training.zuri.team/"
          text="Zuri Team"
          id="btn__zuri"
        />
        <Button link="http://books.zuri.team/" text="Zuri Books" id="‘books" />
        <Button
          link="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
          text="Python Books"
          id="book__python"
        />
        <Button
          link="https://background.zuri.team"
          text="Background Check for Coders"
          id="pitch"
        />
        <Button
          link="https://books.zuri.team/design-rules"
          text="Design Books"
          id="book__design"
        />
      </section>
      <section className="socials">
        <img src={SlackIcon} alt="slack-Icon" />
        <img src={GitHubIcon} alt="slack-Icon" />
      </section>
    </main>
  );
}

export default Main;
