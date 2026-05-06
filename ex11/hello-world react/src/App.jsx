import './App.css';
// --- 使用新版 MUI v5/v6 匯入路徑 ---
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const MultiButton = () => {
  var output = [];
  // 加入 key 屬性以避免 React 警告
  output.push(
    <IconButton key="cart" color="primary" aria-label="add to shopping cart">
      <AddShoppingCartIcon />
    </IconButton>
  );
  output.push(
    <IconButton key="delete" color="primary" aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );
  output.push(
    <IconButton key="alarm" color="primary" aria-label="add an alarm">
      <AlarmIcon />
    </IconButton>
  );
  return output;
};

function App() {
  return (
    <div className="App" style={{ 
      textAlign: 'center', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      backgroundColor: 'white' 
    }}>
      {/* 符合 Page 49 要求：紅色大標題 */}
      <h1 style={{ color: 'red', fontSize: '100px', fontWeight: 'bold' }}>
        hello CGU!!
      </h1>
      
      {/* 符合 Page 49 要求：Material-UI 按鈕組 */}
      <div>
        {MultiButton()}
      </div>
    </div>
  );
}

export default App;