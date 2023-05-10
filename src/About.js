import Herosection from "./components/Herosection";
import { useProduct } from "./context/productcontext";

const About = () => {
  const { myname } = useProduct();

  const data = {
    name: "Name",
  };
  return (
    <>
      <Herosection mydata={data} />
      {myname}
    </>
  );
};

export default About;
