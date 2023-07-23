
import categories from './data/categories.json';
import subcategories from './data/subcategories.json';
function App() {
 
  let data = []
  let data1=[]
 categories.forEach((categories)=>{
    
    subcategories.forEach((subcategories)=>{
        if(categories._id.$oid === subcategories.categoryId){

       data1.push(subcategories.categoryId)
      }
    })
  console.log('====================================');
  console.log("sub=",data1);
  console.log('====================================');
  
    data.push( data1)
  })
 
  console.log('====================================');
  console.log("data=",data);
  console.log('====================================');
  return (
    <div className="App">
      <h1>app</h1>
    </div>
  );
}

export default App;
