import Simulator from "./components/Simulator";

function App() {
  return (
    <div>
      <Simulator 
        totalYears={10}
        baseEfficacy={0.10}
        efficacyImprovementOdds={0.5}
        efficacyImprovementLevel={0.10}
        triesPerExploitInterval={1000} />
    </div>
  );
}

export default App;