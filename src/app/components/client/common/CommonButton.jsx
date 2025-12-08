"use client";
import React from "react";

function CommonButton({
  children,
  color = "primary",
  disabled = false,
  className = "",
  ...props
}) {
  // Color classes
  const colorClasses = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary-dark",
    success: "bg-green-600 text-white hover:bg-green-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    // Add more as needed
  };

  // If className contains px- or py-, remove default px-8 py-3
  const hasCustomPadding = /\bpx-\d+|px-0|py-\d+|py-0\b/.test(className);
  const defaultPadding = hasCustomPadding ? "" : "px-8 py-3";
  return (
    <button
      className={`${defaultPadding} rounded-lg font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${colorClasses[color] || colorClasses.primary} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default CommonButton;
