import Main from "./components/layout/main";
import "./styles/global/index.css";

/*export const metadata: Metadata = {
  title: "Khoa Pham",
  description: "Khoa Pham's Portfolio Website",
  openGraph: {
    title: "Khoa Pham",
    description: "Khoa Pham's Portfolio Website",
  },
};*/

export default function App({ children }: { children: React.ReactNode }) {
  return <Main>{children}</Main>;
}
