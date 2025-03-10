import React, { useState } from "react";
import DashboardHeader from "../layouts/Dashboardheader";
import Extramenu_DashboardHeader from "../layouts/Extramenu_DashboardHeader";

function Donation() {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [message, setMessage] = useState("");

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount && !customAmount) {
      alert("Please select or enter a donation amount.");
      return;
    }
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    alert("Thank you for your generous donation!");
    // Payment Gateway Integration here
  };

  return (
    <div>
      {/* Header */}
      <DashboardHeader />
      <Extramenu_DashboardHeader />

      {/* Donation Section */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">🙏 Support Us with a Donation</h1>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 rounded-xl border border-gray-200">
          {/* Donation Amount Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Select Donation Amount</label>
            <div className="grid grid-cols-3 gap-3">
              {[100, 250, 500, 1000, 5000].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => {
                    setAmount(amt);
                    setCustomAmount("");
                  }}
                  className={`p-3 text-lg font-semibold rounded-md border border-gray-300 ${
                    amount === amt ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  ₹{amt}
                </button>
              ))}
            </div>
            <input
              type="number"
              min="1"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setAmount(""); // Clear preset selection if custom is entered
              }}
              placeholder="Enter Custom Amount"
              className="mt-3 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Select Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Choose Payment Method</option>
              <option value="UPI">UPI</option>
              <option value="Credit/Debit Card">Credit/Debit Card</option>
              <option value="Net Banking">Net Banking</option>
            </select>
          </div>

          {/* Message from Donor */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Leave a Message (Optional)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your support message..."
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
          >
            💖 Donate Now
          </button>

          {/* Disclaimer */}
          <p className="text-sm text-gray-500 text-center mt-4">
            * All donations are non-refundable. Your contribution helps support our initiatives.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Donation;
