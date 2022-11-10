import Card from "../Card/Card";

const List = ({ data, handleClick }) => {
  console.log(data);
  return (
    <div className="d-flex justify-content-center flex-wrap my-4">
      {
        data.map((item, index) => (
          <Card key={index} data={item} handleClick={handleClick} />
        ))
      }
    </div>
  );
}

export default List;