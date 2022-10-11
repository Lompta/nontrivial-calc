import Simulator from "./components/Simulator";

function App() {
  return (
    <div>
      <Simulator 
        totalYears={10}
        baseEfficacy={5}
        efficacyImprovementOdds={0.5}
        efficacyImprovementLevel={5}
        triesPerExploitInterval={1} />
    </div>
  );
}

export default App;
