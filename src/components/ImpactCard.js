import React, { useState, useEffect } from "react";
import { FaLeaf, FaGift, FaShareAlt } from "react-icons/fa";
import dsoulGif from "../assets/images/dsoul.gif";
import certification from "../assets/images/certification.png";

const ImpactCardTailwind = () => {
  const [treesPlanted, setTreesPlanted] = useState(0); // Keep track of trees planted
  const [totalTreesGoal] = useState(500); // Total goal for trees to be planted
  const [rewards, setRewards] = useState(0); // Loyalty points based on trees planted
  const [highlightReward, setHighlightReward] = useState(false); // Highlight effect when rewards update

  // Calculate rewards: 5 points for every 50 trees
  const calculateRewards = (trees) => Math.floor(trees / 50) * 5;

  // Side effect to simulate trees being planted and updating rewards dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      setTreesPlanted((prev) => {
        const updatedTrees = prev < totalTreesGoal ? prev + 5 : prev; // Increase trees by 5 until the goal is reached
        const newRewards = calculateRewards(updatedTrees);

        // Trigger highlight if rewards change
        if (newRewards !== rewards) {
          setRewards(newRewards);
          setHighlightReward(true);
          setTimeout(() => setHighlightReward(false), 1000); // Highlight for 1 second
        }
        return updatedTrees;
      });
    }, 500); // Update every 500ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [totalTreesGoal, rewards]);

  const progressPercentage = (treesPlanted / totalTreesGoal) * 100; // Calculate progress for the progress bar

  return (
    <div className="flex items-center justify-center h-screen bg-silver">
      <div className="relative bg-gradient-to-r from-gunmetal to-paynes-gray rounded-lg shadow-lg w-80 overflow-hidden animate-jiggle">
        
        {/* Image section with hover zoom effect */}
        <div className="relative overflow-hidden group">
          <img
            className="w-full h-60 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-125"
            src={dsoulGif}
            alt="dSoul"
          />
          {/* Darker overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-colors duration-500"></div>

          {/* Sponsor text in bottom-right of image */}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            Sponsored by XYZ Organization
          </div>
        </div>

        {/* Share button in top-right corner */}
        <button
          className="absolute top-2 right-2 text-white hover:text-coral transition-colors"
          aria-label="Share this card"
          onClick={() => console.log("Share clicked")}
        >
          <FaShareAlt className="text-xl" />
        </button>

        <div className="p-6 text-white animate-bounceIn">
          <h2 className="text-2xl font-semibold mb-2">Impact Card</h2>
          <p className="text-grey-300 mb-4">
            This project contributed to carbon offset by planting {treesPlanted} trees globally.
          </p>

          {/* Progress bar showing tree planting progress */}
          <div className="mb-4">
            <p className="text-sm mb-1">
              Progress: {treesPlanted}/{totalTreesGoal} Trees Planted
            </p>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-coral h-2.5 rounded-full animate-scaleUp"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Display impact with a leaf icon */}
          <div className="flex items-center justify-between bg-white bg-opacity-10 p-2 rounded-md mb-2 transition-colors hover:bg-opacity-20">
            <FaLeaf className="text-coral" />
            <span className="text-sm text-grey-300">
              Verified Impact: {treesPlanted} trees planted
            </span>
          </div>

          {/* Rewards section with highlight effect when rewards are updated */}
          <div
            className={`flex items-center justify-between bg-white bg-opacity-10 p-2 rounded-md mb-4 transition-colors hover:bg-opacity-20 ${
              highlightReward ? "animate-highlight" : ""
            }`}
          >
            <FaGift className="text-coral" />
            <span className="text-sm text-grey-300">
              Rewards: <strong className="font-semibold">{rewards}</strong> loyalty points
            </span>
          </div>

          {/* Verified by section with a certification image */}
          <div className="text-silver text-sm mb-4 flex items-center justify-end">
            <p className="flex items-center">
              Verified by{" "}
              <a href="#" className="underline ml-1">
                Climate Impact Registry
              </a>
              <img
                src={certification}
                alt="Certification Stamp"
                className="w-6 h-6 ml-2"
              />
            </p>
          </div>

          {/* Button for tracking impact */}
          <div className="flex justify-end">
            <button className="bg-coral text-white px-4 py-2 rounded hover:bg-coral-hover transition-colors">
              Track Impact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactCardTailwind;
