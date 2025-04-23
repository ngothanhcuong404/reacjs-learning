import { FC, useEffect, useState } from "react";

const CheckSizePage : FC = () => {
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
         }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }

})
  return (
    <div>
      <h1>Check Size Page</h1>
        <p>Window size: {size}</p>
       
    </div>
  );
}
export default CheckSizePage;