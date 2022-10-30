import { useContext } from "react";
import { ThemeContext, Theme } from "../../common/theme";

export interface Message {
  icon?: string;
  title: string;
  text: string;
}

const defaultValues: Message[] = [
  {
    icon: "flaticon-high-five",
    title: "Trusted By Thousands",
    text: "Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.",
  },
  {
    icon: "flaticon-home-1",
    title: "Wide Renge Of Properties",
    text: "Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.",
  },
  {
    icon: "flaticon-profit",
    title: "Financing Made Easy",
    text: "Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.",
  },
];

function createElement(message: Message, index: number, theme: Theme) {
  const style = {
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "blue",
    },
  };
  return (
    <div className="col-md-6 col-lg-4 col-xl-4">
      <div className="why_chose_us">
        <div className="icon">
          <span className={message.icon}></span>
        </div>
        <div className="details">
          <h4>{message.title}</h4>
          <p>{message.text}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const theme: Theme = useContext(ThemeContext);
  const elements = defaultValues.map((e, i) => createElement(e, i, theme));
  return (
    <section id="why-chose" className="whychose_us bgc-f7 pb30">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="main-title text-center">
              <h2>Why Choose Us</h2>
              <p>We provide full service at every step.</p>
            </div>
          </div>
        </div>
        <div className="row">{elements}</div>
      </div>
    </section>
  );
}
