import React from "react";
import Card from "./UI/Card";

const Greet = (ccc) => {

    return (
      <>
      {/* 숨어있는 props 안에 children이 존재한다 ! */}
      <Card className='border-green'>
        <h1>hello react ! {ccc.children}</h1>
      </Card>
      </>
    );
};

export default Greet;