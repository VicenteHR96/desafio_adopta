import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import MyCard from "./components/mycard/MyCard";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <div className="header">
        <Header name="ADOPTA UN PERRITO"></Header>
      </div>
      <div className="cards">
        <MyCard
          img="https://perritorio.com/wp-content/uploads/2022/02/beagle-cachorro.jpeg"
          name="Sol"
          desc="Perrita de 4 meses, juguetón y muy buen compañero de aventuras al aire libre."
          bgBadge="danger"
          textBadge="Beagle"
        ></MyCard>
        <MyCard
          img="https://www.tiendanimal.es/articulos/wp-content/uploads/2017/10/como-educar-a-un-labrador-1200x675.jpg"
          name="Willy"
          desc="Perrito de 6 meses, cariñoso y muy buen asistente emocional."
          bgBadge="success"
          textBadge="Labrador"
        ></MyCard>
        <MyCard
          img="https://mascotassaintdaniel.com/wp-content/uploads/2022/11/bulldog-frances-696x422-1.jpg"
          name="Lilo & Stitch"
          desc="Esta pareja de cachorritos de 5 meses es todo lo que necesitas para llenar de vida tu hogar."
          bgBadge="primary"
          textBadge="Bulldog Francés"
        ></MyCard>
        <MyCard
          img="https://www.diariodesevilla.es/2023/03/24/mascotas/cachorro-eterno-jugueton-ciertos-problemas_1777632416_179836858_1200x675.jpg"
          name="Apolo"
          desc="Perrito de 8 meses, muy buen amigo y guarda todos los secretos que le cuentes."
          bgBadge="warning"
          textBadge="Boxer"
        ></MyCard>
      </div>
      <div className="footer">
        <Footer textFooter="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre."></Footer>
      </div>
    </div>
  );
};

export default App;
