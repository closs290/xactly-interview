import './App.css';
import styled from 'styled-components';
import { Tree, TreeNode } from 'react-organizational-chart';

const NormalNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid blue;
`;

const WarningNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid orange;
`;

const CriticalNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;

const StyledTreeExample = () => (
  <Tree
    lineWidth={'2px'}
    lineColor={'green'}
    lineBorderRadius={'10px'}
    label={<CriticalNode>VP of Sales</CriticalNode>}
  >
    <TreeNode label={<CriticalNode>Sales Manager (North America)</CriticalNode>}>
      <TreeNode label={<NormalNode>Sales Lead (Canada)</NormalNode>} >
        <TreeNode label={<NormalNode>Sales Representative (Toronto) </NormalNode>} />
        <TreeNode label={<NormalNode>Sales Representative (Vancouver)</NormalNode>} />
      </TreeNode>
      <TreeNode label={<CriticalNode>Sales Lead (USA)</CriticalNode>}>
        <TreeNode label={<WarningNode>Sales Representative (New York)</WarningNode>} />
        <TreeNode label={<CriticalNode>Sales Representative (Dallas)</CriticalNode>} />
        <TreeNode label={<CriticalNode>Sales Representative (Los Angeles)</CriticalNode>} />
      </TreeNode>
    </TreeNode>
    <TreeNode label={<WarningNode>Sales Manager (Europe)</WarningNode>}>
      <TreeNode label={<WarningNode>Sales Lead (Germany)</WarningNode>}>
        <TreeNode label={<NormalNode>Sales Representative (Berlin)</NormalNode>} />
        <TreeNode label={<CriticalNode>Sales Representative (Frankfurt)</CriticalNode>} />
      </TreeNode>
      <TreeNode label={<NormalNode>Sales Lead (Italy)</NormalNode>}>
        <TreeNode label={<NormalNode>Sales Representative (Milan)</NormalNode>} />
      </TreeNode>
    </TreeNode>
  </Tree>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledTreeExample />
      </header>
    </div>
  );
}

export default App;
