
const Success = ({ searchParams }) => {
  console.log("searchParams", searchParams);
  return (
    <>
      <div className="h-screen flex justify-center items-center space-x-4">
        <h1 className="text-4xl">Success </h1>
        <div>{searchParams.time}</div>
      </div>
      
    </>
  );
};

export default Success;