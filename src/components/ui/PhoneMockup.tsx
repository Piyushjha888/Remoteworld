"use client";

import { useState } from "react";
import { Wifi, Battery, Check, Home, Bell, User } from "lucide-react";

export default function PhoneMockup() {
  const [medTaken, setMedTaken] = useState(false);

  return (
    <div className="phone-mockup w-[300px] h-[600px] bg-white flex flex-col relative text-ink">
      {/* Mockup Screen Content */}
      <div className="w-full h-full bg-surface-50 p-4 flex flex-col relative">
        {/* Status Bar */}
        <div className="flex justify-between items-center text-ink text-xs font-bold mb-6 pt-2">
          <span>9:41</span>
          <div className="flex space-x-1 items-center">
            <Wifi className="w-4 h-4" />
            <Battery className="w-4 h-4" />
          </div>
        </div>

        {/* App Content */}
        <h3 className="text-2xl font-bold text-ink mb-1">Good Morning, Mary</h3>
        <p className="text-ink-muted text-sm mb-6">Here is your schedule for today.</p>

        {/* Alert Card */}
        <div
          className={`bg-white rounded-2xl p-4 shadow-sm border transition-all duration-500 mb-4 border-l-4 ${
            medTaken
              ? "border-accent border-l-accent opacity-75"
              : "border-brand/20 border-l-brand"
          }`}
        >
          <div className="flex justify-between items-start mb-2">
            <span className={`font-bold ${medTaken ? "text-accent" : "text-brand"}`}>
              10:00 AM
            </span>
            <span
              className={`text-xs px-2 py-1 rounded-full transition-colors duration-500 ${
                medTaken
                  ? "bg-accent/10 text-accent"
                  : "bg-brand/10 text-brand"
              }`}
            >
              Medication
            </span>
          </div>
          <h4
            className={`font-bold text-ink text-lg transition-all duration-500 ${
              medTaken ? "line-through text-ink-muted" : ""
            }`}
          >
            Take Blood Pressure Pill
          </h4>
          <button
            onClick={() => setMedTaken(!medTaken)}
            className={`w-full mt-3 py-2 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform active:scale-95 ${
              medTaken
                ? "bg-accent text-white"
                : "bg-brand text-white hover:bg-brand-dark"
            }`}
          >
            <Check className="w-4 h-4 mr-1" />
            {medTaken ? "Taken!" : "I took it"}
          </button>
        </div>

        {/* Schedule Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-surface-200 opacity-60">
          <div className="flex justify-between items-start mb-1">
            <span className="text-ink-muted font-bold">2:30 PM</span>
            <span className="bg-surface-200 text-ink-muted text-xs px-2 py-1 rounded-full">
              Call
            </span>
          </div>
          <h4 className="font-bold text-ink">Call with Dr. Smith</h4>
        </div>

        {/* Bottom Nav */}
        <div className="absolute bottom-0 left-0 w-full bg-white border-t border-surface-200 p-4 flex justify-between px-8 pb-8">
          <div className="text-brand flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
            <Home className="w-6 h-6" />
          </div>
          <div className="text-surface-300 flex flex-col items-center cursor-pointer hover:scale-110 transition-transform hover:text-brand">
            <Bell className="w-6 h-6" />
          </div>
          <div className="text-surface-300 flex flex-col items-center cursor-pointer hover:scale-110 transition-transform hover:text-brand">
            <User className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
