import NnhClassComp from "./components/nnhClassComp";
import NnhFuncComp from "./components/nnhFuncComp";
import NnhjsxExpression from "./components/nnhjsxExpression";



function NnhApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Lesson03 - Nguyễn Ngọc Hiến</h1> 
      
      <NnhjsxExpression/>

      <hr/>
      {/* su dung function components */}
      <NnhFuncComp/>

      {/* su dung class components */}
      <NnhClassComp/>
    </div>
  );
}

export default NnhApp ;
