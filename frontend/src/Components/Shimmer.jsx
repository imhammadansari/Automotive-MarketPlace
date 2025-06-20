// components/Shimmer.js
const Shimmer = ({ width = "100%", height = "200px" }) => {
  return (
    <div
      className="animate-pulse bg-gray-300 rounded-xl"
      style={{ width, height }}
    />
  );
};

export default Shimmer;
