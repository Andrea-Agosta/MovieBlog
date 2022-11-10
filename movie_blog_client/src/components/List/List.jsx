import Card from "../Card/Card";

const List = ({ data }) => {
  console.log(data);
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {
        data.map((item, index) => (
          <Card key={index} data={item} />
        ))
      }
    </div>
  );
}

export default List;