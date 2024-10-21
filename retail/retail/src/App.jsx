import './App.css';
import { useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/sidebar.jsx';
import Home from './components/Home.jsx';
import Report from './components/Reports.jsx'
// import Billing from  './components/bill.jsx';
import Inventory from './components/inventory.jsx'
import Invoice from './components/invoice.jsx';
import Categories from './components/Categories.jsx';
import BasicTable from './components/table.jsx';

function App() {
  const [openSidebar,setOpensideBar] =useState(true)
  const [selectedEntity,setSelectedEntity] = useState(' ');
  


  let content =<Invoice />;
  function handleSideBarOC(){
    console.log(openSidebar);
    setOpensideBar(!openSidebar);
  }
  
  function handleSideBar(selected){
    setSelectedEntity(selected)
    //console.log(selectedEntity)
  }
  if(selectedEntity === 'dashboard'){
        
    content = <Home />;
    
  }
  else if(selectedEntity ==='bill'){
    
    content =<Invoice onStart={handleSideBar}/>;
  }
  else if(selectedEntity ==='inventory'){
    content =<BasicTable/>
  }
  else if(selectedEntity ==='reports'){
    content =<Report />
  }
  else if(selectedEntity ==='Categories'){
    content =<Categories />
  }

  return (
    <div className="App">
      <header className="App-header">
        { selectedEntity === 'bill'? content :
        <div className='grid-container'>
        <Header onSide={handleSideBarOC}/>
        
         {openSidebar?<Sidebar  onStart={handleSideBar}/>:null}
        
         
         {content}
         </div>
        }
      

        
        {/* <Billing /> */}
        
      </header>
    </div>
  );
}

export default App;
