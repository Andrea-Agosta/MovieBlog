import Card from "../Card/Card";

const List = ({ data, showMovie }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap my-4">
      {
        data.map((item, index) => (
          <Card key={index} data={item} handleClick={showMovie} />
        ))
      }
    </div>
  );
}

export default List;