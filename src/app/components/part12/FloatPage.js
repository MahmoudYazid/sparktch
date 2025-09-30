"use client";
import { closeWindow } from '@/app/redux/subPageSignal';
import React from 'react';
import { useDispatch , useSelector } from 'react-redux';

const FloatPage = () => {
    const dispatch = useDispatch();
  return (
    <div className="w-full h-full fixed flex items-center justify-center z-50 top-0 left-0 bg-black/60 backdrop-blur-sm">
      {/* Modal Window */}
      <div className="fixed w-[90%] lg:w-[60%] h-[50rem] bg-[#1e293b] text-white rounded-2xl shadow-2xl p-8 overflow-y-auto z-50">
        {/* Close Button */}
        <button
          className="absolute top-4 right-6 text-gray-400 hover:text-white text-2xl font-bold"
          onClick={() => dispatch(closeWindow())}
        >
          ×
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center font-bold">
            RPO
          </div>
          <div>
            <h2 className="text-2xl font-bold">
              Recruitment Process Outsourcing (RPO)
            </h2>
            <p className="text-sm text-gray-400">Ongoing • Full Service</p>
          </div>
        </div>

        {/* Service Overview */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Service Overview</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            End-to-end recruitment management with candidate profiling,
            sourcing, screening, and SLA-driven performance metrics.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mt-2">
            Streamline your hiring with our end-to-end recruitment management.
            We handle candidate profiling, sourcing, screening, interview
            coordination, and onboarding with SLA and KPI-driven performance
            metrics.
          </p>
        </section>

        {/* What We Provide */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span>✅</span> What We Provide
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-slate-700/60 rounded-md px-3 py-2">
              Candidate Sourcing
            </div>
            <div className="bg-slate-700/60 rounded-md px-3 py-2">
              Interview Coordination
            </div>
            <div className="bg-slate-700/60 rounded-md px-3 py-2">
              Performance Metrics
            </div>
            <div className="bg-slate-700/60 rounded-md px-3 py-2">
              Multi-tiered Strategies
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span>⭐</span> Key Benefits
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-green-900/40 rounded-md px-3 py-2">
              Lower Recruitment Costs
            </div>
            <div className="bg-green-900/40 rounded-md px-3 py-2">
              Reduced Time-to-hire
            </div>
            <div className="bg-green-900/40 rounded-md px-3 py-2">
              Enhanced Candidate Quality
            </div>
            <div className="bg-green-900/40 rounded-md px-3 py-2">
              Scalable Hiring Models
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span>➡️</span> Our Approach
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Requirement Analysis",
              "Sourcing Strategy",
              "Candidate Screening",
              "Interview Process",
              "Onboarding Support",
            ].map((step, i) => (
              <li
                key={i}
                className="bg-purple-900/40 rounded-md px-3 py-2 flex items-center gap-2"
              >
                <span className="bg-purple-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="bg-slate-800/60 rounded-xl p-4 text-center">
          <h4 className="font-semibold mb-2">Ready to Get Started?</h4>
          <p className="text-gray-400 text-sm mb-4">
            Contact us to discuss how recruitment process outsourcing (RPO) can
            transform your business.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-blue-600 rounded-lg text-white font-semibold hover:opacity-90">
              Get Started
            </button>
            <button
              onClick={() => console.log("close")}
              className="px-6 py-2 bg-slate-700 rounded-lg text-white hover:opacity-80"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatPage;
