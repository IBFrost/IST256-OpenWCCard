import { LitElement, html, css } from "lit";

const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

class GotemCard extends LitElement {
  createRenderRoot() {
    return this.attachShadow({ mode: "open" });
  }

  firstUpdated() {
    const duplicateButton = this.shadowRoot.querySelector("#duplicate");
    duplicateButton.addEventListener("click", this.duplicateCard.bind(this));

    const colorChangeButton = this.shadowRoot.querySelector("#colorChange");
    colorChangeButton.addEventListener("click", this.colorChange.bind(this));

    const headingChangeButton = this.shadowRoot.querySelector("#headingChange");
    headingChangeButton.addEventListener("click", this.headingChange.bind(this));

    const deleteLastButton = this.shadowRoot.querySelector("#deleteLast");
    deleteLastButton.addEventListener("click", this.deleteLast.bind(this));
  }

  connectedCallback() {
    super.connectedCallback();
    super.createRenderRoot();
    super.firstUpdated();
  }



  duplicateCard() {
    var card = this.shadowRoot.querySelector("#cardContainer");
    var cardClone = card.cloneNode(true);
    card.parentNode.appendChild(cardClone);
  }

  colorChange() {
    var cards = this.shadowRoot.querySelectorAll("#cardContainer");
    var newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    for (const e of cards) {
      e.style.backgroundColor = newColor;
    }
  }

  deleteLast() {
    const cards = this.shadowRoot.querySelectorAll("#cardContainer");
    if (cards.length > 1) {
      cards[cards.length - 1].parentNode.removeChild(cards[cards.length - 1]);
    }
  }

  headingChange() {
    var cards = this.shadowRoot.querySelectorAll("#title");
    for (const e of cards) {
      e.textContent = "something else";
    }
  }

  static properties = {};

  static styles = css`
    :host, section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 0.6;
    }

    button {
      visibility: visible;
      margin: 8px;
    }

    #cardContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex;
      border: solid 8px;
      border-color: black;
      max-width: 400px;
      background-color: #5c4033;
      color: white;
      margin: 8px;
    }

    h1 {
      font-family: Arial;
      text-align: center;
      margin: 8px;
      width: 100%;
    }

    a {
      margin: auto;
      width: 100px;
    }

    #cardImg {
      margin: 16px;
      margin-bottom: 0;
      max-width: 400px;
    }

    p {
      font-family: Arial;
      margin-left: 16px;
      max-width: 400px;
      text-align: left;
    }

    summary {
      justify-content: left;
      align-items: left;
      text-align: left;
    }

    details {
      font-family: Arial;
      margin-left: 16px;
      max-width: 400px;
      justify-content: left;
      text-align: left;
    }

    @media screen and (max-width: 800px) and (min-width: 500px) {
      button {
        visibility: visible;
      }
    }

    @media screen and (max-width: 500px) {
      #cardContainer {
        max-width: 90%;
      }
    }
  `;

  constructor() {
    super();
    this.header = "My app";
  }

  render() {
    return html`
      <section>
        <div class="wrapper">
          <button id="duplicate">Duplicate Card</button>
          <button id="colorChange">Change Color</button>
          <button id="headingChange">Change Heading</button>
          <button id="deleteLast">Delete Last</button>
          <div id="cardContainer">
            <div>
              <h1 id="title">Gotem</h1>
            </div>
            <img
              id="cardImg"
              src="https://i.kym-cdn.com/photos/images/newsfeed/001/323/085/7fd.jpg"
              alt="Circle Game. You lose."
            />
            <details>
              <summary>Details</summary>
              <p>Image deviously licked from KnowYourMeme</p>
            </details>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("gotem-card", GotemCard);