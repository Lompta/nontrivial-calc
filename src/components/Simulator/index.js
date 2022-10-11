import React, { useCallback, useState } from 'react'

const Simulator = ({ totalYears, baseEfficacy, efficacyImprovementOdds, efficacyImprovementLevel, triesPerExploitInterval }) => {
    const [efficacy, setEfficacy] = useState(baseEfficacy);
    const [totalScore, setTotalScore] = useState(0);
    const [yearsRemaining, setYearsRemaining] = useState(totalYears);


    const researchForYear = useCallback(() => {
        const isResearchSuccessful = Math.random() > efficacyImprovementOdds;
        if (isResearchSuccessful) {
            setEfficacy(Math.floor(efficacy + efficacyImprovementLevel));
        }

        setYearsRemaining(yearsRemaining - 1);
    }, [efficacy, setEfficacy, efficacyImprovementOdds, efficacyImprovementLevel, yearsRemaining, setYearsRemaining]);

    const distributeForYear = useCallback(() => {
        setTotalScore(Math.floor(triesPerExploitInterval * efficacy) + totalScore);

        setYearsRemaining(yearsRemaining - 1);
    }, [efficacy, triesPerExploitInterval, totalScore, setTotalScore, yearsRemaining, setYearsRemaining]);

    return <div>
        <div>
            Hours Remaining: {yearsRemaining}
        </div>
        <div>
            Points Per Writing Hour: {efficacy}
        </div>
        <div>
            Current Score: {totalScore}
        </div>
        <div>
            <button onClick={researchForYear} disabled={yearsRemaining < 1}>Research!</button>
            <button onClick={distributeForYear} disabled={yearsRemaining < 1}>Distribute!</button>
        </div>
    </div>
}

export default Simulator;