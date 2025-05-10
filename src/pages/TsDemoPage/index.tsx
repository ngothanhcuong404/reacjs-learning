import { FC } from "react";
import { basicTypes } from "./demos/datatype";
import { greet, logInfo, add, multiply, divide, printId, crash, processUser } from "./demos/func";
import { interfaceDemo } from "./demos/Interfaces";
import { typeDemo } from "./demos/type";

const TsDemoPage: FC = () => {

    basicTypes();
    logInfo("Hello world");
    console.log(add(1, 2));
    console.log(multiply(1, 2));
    console.log(divide(1, 2));
    printId(1);
    processUser("Cuong", logInfo);
    console.log(greet("Cuong"));
    interfaceDemo();
    typeDemo();
    

  return (
    <div>
      <h1>Typescript Demo</h1>
        <button onClick={crash}>Throw Error</button>

    </div>
  );
};

export default TsDemoPage;
