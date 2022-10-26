import React from "react";
import Button from "../Button/Button";
import "./Main.scss";
import SlackIcon from "../../assets/slack.png";
import GitHubIcon from "../../assets/github.png";

function Main() {
  return (
    <main>
      <section className="buttons-container">
        <Button
          link="https://twitter.com/yomi_dev"
          text="Twitter Link"
          id="btn_twitter"
        />
        <Button
          link="https://training.zuri.team/"
          text="Zuri Team"
          id="btn__zuri"
        />
        <Button link="http://books.zuri.team/" text="Zuri Books" id="‘books" />
        <Button
          link="https://books.zuri.team/python-for-beginners?ref_id=yomi_dev"
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
        <a href="">
          <img src={SlackIcon} alt="slack-Icon" />
        </a>
        <a href="https://github.com/damaestro165/HNG9-01">
          <img src={GitHubIcon} alt="slack-Icon" />
        </a>
      </section>
    </main>
  );
}

export default Main;
