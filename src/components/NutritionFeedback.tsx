"use client"

import React, { useState, useRef } from 'react';
import { Bungee, Open_Sans } from 'next/font/google';
import Image from 'next/image';

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
});

const NutritionFeedback = () => {
  const [selectedSection, setSelectedSection] = useState('');
  const scrollContainerRef = useRef(null);
  
  const plateData = {
    vegetables: {
      score: '8/10',
      status: 'Good',
      details: 'Including Spinach and Broccoli in your diet has improved your vegetable intake.',
      icon: '/vegetables.png',
      color: '#74B744',
      iconPosition: { x: 100, y: 100 }
    },
    fruits: {
      score: '7/10',
      status: 'Good',
      details: 'Regular fruit consumption is helping maintain a balanced diet.',
      icon: '/fruits.png',
      color: '#D62128',
      iconPosition: { x: 300, y: 100 }
    },
    protein: {
      score: '10/10',
      status: 'Great',
      details: 'Including Egg Whites and Chicken Breast in your diet led to exceptional results.',
      icon: '/protein.png',
      color: '#5F4994',
      iconPosition: { x: 100, y: 300 }
    },
    grains: {
      score: '8/10',
      status: 'Good',
      details: 'Your whole grain intake is well-balanced.',
      icon: '/grains.png',
      color: '#E67323',
      iconPosition: { x: 300, y: 300 }
    },
    dairy: {
      score: '6/10',
      status: 'Fair',
      details: 'Consider reducing high-fat dairy products.',
      icon: '/dairy.png',
      color: '#5083C5',
      iconPosition: { x: 450, y: 200 }
    }
  };
  
  const headingColors = {
    title: '#1A365D',
    positiveChoices: '#A3AA4E',
    goalProgress: '#6B5286',
    myPlate: '#E4702D',
    otherNutrition: '#58504C',
    recommendations: '#D92027',
    progress: '#3E85C6'
  };

  const handleScroll = (e) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.scrollBehavior = 'smooth';
    }
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section === selectedSection ? '' : section);
  };

  const MyPlateSVG = () => (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 500 400" className="w-full h-auto">
        {/* Vegetables (top-left) */}
        <g onClick={() => handleSectionClick('vegetables')} className="cursor-pointer">
          <path 
            d="M200,200 L200,0 A200,200 0 0,0 0,200 Z" 
            fill={plateData.vegetables.color}
            className="transition-opacity hover:opacity-80"
          />
          <foreignObject x="40" y="35" width="160" height="160">
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-25 h-25 relative">
                  <Image
                    src={plateData.vegetables.icon}
                    alt="vegetables"
                    width={128}
                    height={128}
                  />
                </div>
              </div>
            </div>
          </foreignObject>
        </g>
  
        {/* Fruits (top-right) */}
        <g onClick={() => handleSectionClick('fruits')} className="cursor-pointer">
          <path 
            d="M200,200 L400,200 A200,200 0 0,0 200,0 Z" 
            fill={plateData.fruits.color}
            className="transition-opacity hover:opacity-80"
          />
          <foreignObject x="200" y="35" width="160" height="160">
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-25 h-25 relative">
                  <Image
                    src={plateData.fruits.icon}
                    alt="fruits"
                    width={128}
                    height={128}
                  />
                </div>
              </div>
            </div>
          </foreignObject>
        </g>
  
        {/* Protein (bottom-left) */}
        <g onClick={() => handleSectionClick('protein')} className="cursor-pointer">
          <path 
            d="M200,200 L0,200 A200,200 0 0,0 200,400 Z" 
            fill={plateData.protein.color}
            className="transition-opacity hover:opacity-80"
          />
          <foreignObject x="40" y="200" width="160" height="160">
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-25 h-25 relative">
                  <Image
                    src={plateData.protein.icon}
                    alt="protein"
                    width={128}
                    height={128}
                  />
                </div>
              </div>
            </div>
          </foreignObject>
        </g>
  
        {/* Grains (bottom-right) */}
        <g onClick={() => handleSectionClick('grains')} className="cursor-pointer">
          <path 
            d="M200,200 L200,400 A200,200 0 0,0 400,200 Z" 
            fill={plateData.grains.color}
            className="transition-opacity hover:opacity-80"
          />
          <foreignObject x="200" y="200" width="160" height="160">
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-25 h-25 relative">
                  <Image
                    src={plateData.grains.icon}
                    alt="grains"
                    width={128}
                    height={128}
                  />
                </div>
              </div>
            </div>
          </foreignObject>
        </g>
  
        {/* Dairy circle */}
        <g onClick={() => handleSectionClick('dairy')} className="cursor-pointer">
          <circle 
            cx="430" 
            cy="100" 
            r="50" 
            fill={plateData.dairy.color}
            className="transition-opacity hover:opacity-80"
          />
          <foreignObject x="380" y="50" width="100" height="100">
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 relative">
                  <Image
                    src={plateData.dairy.icon}
                    alt="dairy"
                    width={128}
                    height={128}
                  />
                </div>
              </div>
            </div>
          </foreignObject>
        </g>
      </svg>
  
      {/* Selected Section Details */}
    {selectedSection && (
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-full" style={{ backgroundColor: plateData[selectedSection].color }}>
            <div className="relative" style={{ width: '64px', height: '64px' }}>
              <Image
                src={plateData[selectedSection].icon}
                alt={selectedSection}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>
          <div className="text-gray-900">
            <h3 className="font-bold capitalize">
              {selectedSection}: {plateData[selectedSection].score} - {plateData[selectedSection].status}
            </h3>
            <p>{plateData[selectedSection].details}</p>
          </div>
        </div>
      </div>
    )}
  </div>
);
  
  

  return (
    <div className={`w-full max-w-md mx-auto bg-white rounded-lg shadow-lg ${openSans.className}`}>
      <div 
        className="h-[600px] overflow-y-auto p-6 text-gray-900" 
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        {/* Logo & Title Section */}
        <div className="white p-4 rounded-lg mb-6">
          <img src="/FINs.png" alt="Food Logo" className="h-8" />
          <h1 className={`${bungee.className} text-2xl text-center mt-2`} 
              style={{ color: headingColors.title }}>
            Grocery Feedback
          </h1>
        </div>

        {/* Positive Choices Section */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h2 className={`${bungee.className} text-xl mb-4 text-center`} 
              style={{ color: headingColors.positiveChoices }}>
            Positive Choices This Week
          </h2>
          <ul className="space-y-2 text-gray-900">
            <li className="flex items-center gap-2">• Spinach</li>
            <li className="flex items-center gap-2">• Broccoli</li>
            <li className="flex items-center gap-2">• Yogurt</li>
          </ul>
        </div>

        {/* Goal Progress Section */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h2 className={`${bungee.className} text-xl mb-4 text-center`}
              style={{ color: headingColors.goalProgress }}>
            Goal Progress
          </h2>
          <p className="mb-4 text-gray-900">You indicated your goals were to <strong>reduce added sugar</strong>, <strong>reduce sodium</strong>, and <strong>increase vegetable intake</strong>.</p>
          <ul className="space-y-2 text-gray-900">
            <li>• You've made great strides in increasing your vegetable intake with smart choices like <strong>Spinach</strong> and <strong>Broccoli</strong>.</li>
            <li>• However, items like <strong>Butter</strong> and <strong>Cheese</strong> didn't support your goal of reducing saturated fat levels.</li>
          </ul>
        </div>

        {/* MyPlate Section */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h2 className={`${bungee.className} text-xl mb-4 text-center`}
              style={{ color: headingColors.myPlate }}>
            MyPlate Breakdown
          </h2>
          <MyPlateSVG />
          <div className="text-center mt-4 text-gray-500 text-sm">
            Tap to Explore Each Group
          </div>
        </div>

        {/* Other Nutrition Information Section */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h2 className={`${bungee.className} text-xl mb-4 text-center`}
              style={{ color: headingColors.otherNutrition }}>
            Other Nutrition Information
          </h2>
          <div className="mb-4">
            <p className="text-red-500">Saturated Fats: 1.46/10 - Needs Improvement</p>
            <p className="text-gray-900">Choices such as <strong>Butter</strong> and <strong>Cheese</strong> introduced more saturated fats, affecting your score.</p>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h2 className={`${bungee.className} text-xl mb-4 text-center`}
              style={{ color: headingColors.recommendations }}>
            Recommendations
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold text-gray-900">Butter:</h3>
              <p className="text-gray-900">
                To better align with your health goals, consider trying{" "}
                <span style={{ color: "#A3AA4E", fontWeight: "bold" }}>Smart Balance Original Buttery Spread</span>{" "}
                available at Walmart.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold text-gray-900">Cheese:</h3>
              <p className="text-gray-900">
                For a healthier alternative,{" "}
                <span style={{ color: "#A3AA4E", fontWeight: "bold" }}>Follow Your Heart Dairy-Free Cheddar Cheese</span>{" "}
                from Walmart could be a great option.
              </p>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className={`${bungee.className} text-xl mb-4 text-center`}
              style={{ color: headingColors.progress }}>
            Your Progress
          </h2>
          <div className="p-4 bg-white rounded-lg">
            <div className="mb-4">
                <img 
                    src="/progress.png" 
                    alt="Progress Graph" 
                    className="w-full rounded-lg"
                />
            </div>
            <p className="text-gray-900 font-bold text-center">Week 3: Congrats! Your HEI Score has increased from last week</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NutritionFeedback;