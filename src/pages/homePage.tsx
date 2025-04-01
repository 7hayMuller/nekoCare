import List from "@/components/List";

const HomePage = () => {
  return (
    <>
      <h1>Meus agendamentos</h1>
      <List
        avatar="/static/images/avatar/1.jpg"
        title="Terça-feira 01/04 ás 13:30h"
        description="Consulta marcada com a Drª Juliana"
      />
    </>
  );
};
export default HomePage;
