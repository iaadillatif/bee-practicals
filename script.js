// Author: Aadil Latif
// This JavaScript file was coded by Aadil Latif.

document.addEventListener("DOMContentLoaded", function() {
    // Practical 01
    addLinks("https://be-iitkgp.vlabs.ac.in/exp/familiarisation-resistor/theory.html", "https://be-iitkgp.vlabs.ac.in/exp/familiarisation-resistor/simulation.html", 1);

    // Practical 02
    addLinks("https://be-iitkgp.vlabs.ac.in/exp/familiarisation-capacitor/theory.html", "https://phet.colorado.edu/sims/html/capacitor-lab-basics/latest/capacitor-lab-basics_en.html", 2);

    // Practical 03
    addLinks("https://be-iitkgp.vlabs.ac.in/exp/familiarisation-inductor/theory.html", "https://www.falstad.com/circuit/circuitjs.html", 3);

    // Practical 04
    addLinks("https://be-iitkgp.vlabs.ac.in/exp/ohm-law/theory.html", "https://be-iitkgp.vlabs.ac.in/exp/ohm-law/simulation.html", 4);

    // Practical 05
    addLinks("https://be-iitkgp.vlabs.ac.in/exp/characteristics-diode/theory.html", "https://be-iitkgp.vlabs.ac.in/exp/characteristics-diode/simulation.html", 5);

    // Practical 06
    addLinks("https://be-iitkgp.vlabs.ac.in/exp/half-wave-rectification/theory.html", "https://be-iitkgp.vlabs.ac.in/exp/half-wave-rectification/simulation.html", 6);

    // Practical 07
    addLinks("https://be-iitkgp.vlabs.ac.in/exp/full-wave-rectification/theory.html", "https://be-iitkgp.vlabs.ac.in/exp/full-wave-rectification/simulation.html", 7);

    // Practical 08
    addLinks("https://asnm-iitkgp.vlabs.ac.in/exp/rlc-circuit-analysis/theory.html", "https://asnm-iitkgp.vlabs.ac.in/exp/rlc-circuit-analysis/simulation.html", 8);

    // Practical 09
    addLinks("https://asnm-iitkgp.vlabs.ac.in/exp/verification-superposition-theorem/theory.html", "https://asnm-iitkgp.vlabs.ac.in/exp/verification-superposition-theorem/simulation.html", 9);

    // Practical 10
    addLinks("https://asnm-iitkgp.vlabs.ac.in/exp/verification-thevenin-theorem/theory.html", "https://asnm-iitkgp.vlabs.ac.in/exp/verification-thevenin-theorem/simulation.html", 10);

    // Practical 11
    addLinks("https://asnm-iitkgp.vlabs.ac.in/exp/verification-norton-theorem/theory.html", "https://asnm-iitkgp.vlabs.ac.in/exp/verification-norton-theorem/simulation.html", 11);

    // Practical 12
    addLinks("https://be-iitkgp.vlabs.ac.in/exp/voltage-regulator/theory.html", "https://be-iitkgp.vlabs.ac.in/exp/voltage-regulator/simulation.html", 12);

    // Practical 13
    addLinks("https://asnm-iitkgp.vlabs.ac.in/exp/verification-millman-theorem/theory.html", "https://asnm-iitkgp.vlabs.ac.in/exp/verification-millman-theorem/simulation.html", 13);

    // Practical 14
    addLinks("https://asnm-iitkgp.vlabs.ac.in/exp/single-phase-transformer/theory.html", "https://asnm-iitkgp.vlabs.ac.in/exp/single-phase-transformer/simulation.html", 14);

    // Practical 15
    addLinks("https://asnm-iitkgp.vlabs.ac.in/exp/maximum-power-transfer-theorem/theory.html", "https://asnm-iitkgp.vlabs.ac.in/exp/maximum-power-transfer-theorem/simulation.html", 15);

    // Practical 16
    addLinks("https://em-coep.vlabs.ac.in/exp/load-test-dc-motor/theory.html", null, 16);
});

function addLinks(theoryLink, simulationLink, practicalNumber) {
    const practicalContainer = document.querySelector(`.practical:nth-child(${practicalNumber})`);

    if (practicalContainer) {
        // Create bold text for "Link of Practical:"
        const boldText = document.createElement("b");
        boldText.textContent = "Link of Practical: ";

        // Create theory link
        const theoryAnchor = document.createElement("a");
        theoryAnchor.href = theoryLink;
        theoryAnchor.target = "_blank";
        theoryAnchor.textContent = "Theory";

        // Create simulation link if available
        if (simulationLink) {
            const simulationAnchor = document.createElement("a");
            simulationAnchor.href = simulationLink;
            simulationAnchor.target = "_blank";
            simulationAnchor.textContent = "Simulation";

            // Append links to the practical container
            practicalContainer.appendChild(boldText);
            practicalContainer.appendChild(theoryAnchor);
            practicalContainer.appendChild(document.createTextNode(" | ")); // Add a separator
            practicalContainer.appendChild(simulationAnchor);
        } else {
            // If there is no simulation link, only append the theory link
            practicalContainer.appendChild(boldText);
            practicalContainer.appendChild(theoryAnchor);
        }
    }
}
